#include "lexer.h"
#include "parser.h"
#include "ir.h"
#include "optimizer.h"
#include "codegen.h"
#include "symbol_table.h"
#include "utils.h"
#include "assembler.h"
#include "linker.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv) {
    if (argc < 2) {
        printf("Usage: mcompiler <source_file>\n");
        return 1;
    }
    // Load source code
    FILE *f = fopen(argv[1], "r");
    if (!f) {
        perror("Error opening source file");
        return 1;
    }
    fseek(f, 0, SEEK_END);
    long len = ftell(f);
    fseek(f, 0, SEEK_SET);
    char *source = malloc(len + 1);
    fread(source, 1, len, f);
    source[len] = '\0';
    fclose(f);

    // Lexical analysis
    TokenList *tokens = lex(source);
    // Parsing
    AST *ast = parse(tokens);
    // IR Generation
    IRProgram *ir = ir_generate(ast);
    // Optimization
    optimize_ir(ir);
    // Code Generation
    int result = codegen(ir, "output.asm");
    if (result != 0) {
        printf("Code generation failed\n");
        return 1;
    }
    // Self-hosted assemble and link
    if (assemble("output.asm", "output.obj") != 0) {
        printf("Assembly failed\n");
        return 1;
    }
    if (link("output.obj", "output.exe") != 0) {
        printf("Linking failed\n");
        return 1;
    }
    printf("Compilation successful. Output: output.exe\n");
    free(source);
    return 0;
}
