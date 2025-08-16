#include "codegen.h"
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int codegen(IRProgram *ir, const char *output_file) {
    FILE *f = fopen(output_file, "w");
    if (!f) return 1;
    // Emit .data section for variables
    fprintf(f, "section .data\n");
    // TODO: Track and emit all variables used
    fprintf(f, "a: dq 0\n");
    fprintf(f, "b: dq 0\n");
    fprintf(f, "sum: dq 0\n");
    fprintf(f, "section .text\n");
    fprintf(f, "global main\n");
    fprintf(f, "main:\n");
    IRInst *inst = ir->head;
    while (inst) {
        if (strcmp(inst->op, "IMM") == 0) {
            fprintf(f, "    mov rax, %d\n", inst->value);
        } else if (strcmp(inst->op, "MOV") == 0) {
            fprintf(f, "    mov [%s], rax\n", inst->dst);
        } else if (strcmp(inst->op, "ADD") == 0) {
            fprintf(f, "    add rax, rbx\n");
        } else if (strcmp(inst->op, "LOAD") == 0) {
            fprintf(f, "    mov rax, [%s]\n", inst->dst);
        } else if (strcmp(inst->op, "PRINT") == 0) {
            fprintf(f, "    ; print rax (stub)\n");
        }
        inst = inst->next;
    }
    fprintf(f, "    ret\n");
    fclose(f);
    return 0;
}
