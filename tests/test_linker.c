#include "../src/linker.h"
#include <assert.h>
#include <stdio.h>
int main() {
    int result = link("test_output.obj", "test_output.exe");
    assert(result == 0);
    printf("Linker test passed.\n");
    return 0;
}
