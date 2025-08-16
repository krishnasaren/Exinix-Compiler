#include "../src/assembler.h"
#include <assert.h>
#include <stdio.h>
int main() {
    int result = assemble("test_output.asm", "test_output.obj");
    assert(result == 0);
    printf("Assembler test passed.\n");
    return 0;
}
