#include "parser.h"
#include <stdlib.h>
#include <string.h>

static int pos = 0;
static TokenList *toklist;

static Token *peek() {
    return &toklist->tokens[pos];
}
static Token *consume(TokenType type) {
    Token *t = peek();
    if (t->type == type) {
        pos++;
        return t;
    }
    return NULL;
}

static AST *parse_number() {
    Token *t = consume(TOKEN_NUMBER);
    if (!t) return NULL;
    AST *node = (AST*)malloc(sizeof(AST));
    node->type = AST_NUMBER;
    node->value = atoi(t->value);
    node->left = node->right = node->expr = NULL;
    node->name = NULL;
    return node;
}

static AST *parse_id() {
    Token *t = consume(TOKEN_ID);
    if (!t) return NULL;
    AST *node = (AST*)malloc(sizeof(AST));
    node->type = AST_ID;
    node->name = strdup(t->value);
    node->left = node->right = node->expr = NULL;
    return node;
}

static AST *parse_term() {
    if (peek()->type == TOKEN_NUMBER) return parse_number();
    if (peek()->type == TOKEN_ID) return parse_id();
    return NULL;
}

static AST *parse_expr() {
    AST *left = parse_term();
    if (!left) return NULL;
    if (peek()->type == TOKEN_PLUS) {
        consume(TOKEN_PLUS);
        AST *right = parse_term();
        AST *node = (AST*)malloc(sizeof(AST));
        node->type = AST_BINOP;
        node->left = left;
        node->right = right;
        node->name = NULL;
        node->expr = NULL;
        return node;
    }
    return left;
}

static AST *parse_assign() {
    Token *id = consume(TOKEN_ID);
    if (!id) return NULL;
    if (!consume(TOKEN_ASSIGN)) return NULL;
    AST *expr = parse_expr();
    if (!consume(TOKEN_SEMICOLON)) return NULL;
    AST *node = (AST*)malloc(sizeof(AST));
    node->type = AST_ASSIGN;
    node->name = strdup(id->value);
    node->expr = expr;
    node->left = node->right = NULL;
    return node;
}

static AST *parse_print() {
    if (!consume(TOKEN_PRINT)) return NULL;
    if (!consume(TOKEN_LPAREN)) return NULL;
    AST *expr = parse_expr();
    if (!consume(TOKEN_RPAREN)) return NULL;
    if (!consume(TOKEN_SEMICOLON)) return NULL;
    AST *node = (AST*)malloc(sizeof(AST));
    node->type = AST_PRINT;
    node->expr = expr;
    node->name = NULL;
    node->left = node->right = NULL;
    return node;
}

AST *parse(TokenList *tokens) {
    toklist = tokens;
    pos = 0;
    AST *head = NULL, *tail = NULL;
    while (peek()->type != TOKEN_EOF) {
        AST *node = NULL;
        if (peek()->type == TOKEN_ID && tokens->tokens[pos+1].type == TOKEN_ASSIGN) {
            node = parse_assign();
        } else if (peek()->type == TOKEN_PRINT) {
            node = parse_print();
        } else {
            pos++;
            continue;
        }
        if (!head) {
            head = tail = node;
        } else {
            tail->right = node;
            tail = node;
        }
    }
    return head;
}
