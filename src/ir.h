#ifndef IR_H
#define IR_H
#include "parser.h"

typedef struct IRProgram IRProgram;

typedef struct IRInst {
	char *op;
	char *dst;
	char *src1;
	char *src2;
	int value;
	struct IRInst *next;
} IRInst;

typedef struct IRProgram {
	IRInst *head;
} IRProgram;

IRProgram *ir_generate(AST *ast);

#endif // IR_H
