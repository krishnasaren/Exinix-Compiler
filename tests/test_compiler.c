#include "../src/lexer.h"
#include "../src/parser.h"
#include "../src/ir.h"
#include "../src/optimizer.h"
#include "../src/codegen.h"
#include <assert.h>
#include <stdio.h>

int main() {
    const char *source = "a = 10; b = 20; sum = a + b; print(sum);";
    TokenList *tokens = lex(source);
    assert(tokens != NULL);
    AST *ast = parse(tokens);
    assert(ast != NULL);
    IRProgram *ir = ir_generate(ast);
    assert(ir != NULL);
    optimize_ir(ir);
    int result = codegen(ir, "test_output.asm");
    assert(result == 0);
    printf("Test passed: Compilation pipeline completed.\n");
    return 0;
}
