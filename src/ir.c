#include "ir.h"
#include <stddef.h>
#include <stdlib.h>
#include <string.h>

static void emit(IRProgram *prog, const char *op, const char *dst, const char *src1, const char *src2, int value) {
    IRInst *inst = (IRInst*)malloc(sizeof(IRInst));
    inst->op = strdup(op);
    inst->dst = dst ? strdup(dst) : NULL;
    inst->src1 = src1 ? strdup(src1) : NULL;
    inst->src2 = src2 ? strdup(src2) : NULL;
    inst->value = value;
    inst->next = NULL;
    if (!prog->head) {
        prog->head = inst;
    } else {
        IRInst *cur = prog->head;
        while (cur->next) cur = cur->next;
        cur->next = inst;
    }
}

static void gen_ir(AST *node, IRProgram *prog) {
    if (!node) return;
    if (node->type == AST_ASSIGN) {
        gen_ir(node->expr, prog);
        emit(prog, "MOV", node->name, NULL, NULL, 0);
    } else if (node->type == AST_BINOP) {
        gen_ir(node->left, prog);
        gen_ir(node->right, prog);
        emit(prog, "ADD", NULL, NULL, NULL, 0);
    } else if (node->type == AST_NUMBER) {
        emit(prog, "IMM", NULL, NULL, NULL, node->value);
    } else if (node->type == AST_ID) {
        emit(prog, "LOAD", node->name, NULL, NULL, 0);
    } else if (node->type == AST_PRINT) {
        gen_ir(node->expr, prog);
        emit(prog, "PRINT", NULL, NULL, NULL, 0);
    }
    gen_ir(node->right, prog);
}

IRProgram *ir_generate(AST *ast) {
    IRProgram *prog = (IRProgram*)malloc(sizeof(IRProgram));
    prog->head = NULL;
    gen_ir(ast, prog);
    return prog;
}

