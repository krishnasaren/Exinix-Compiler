#ifndef LEXER_H
#define LEXER_H

typedef enum {
    TOKEN_ID, TOKEN_NUMBER, TOKEN_ASSIGN, TOKEN_PLUS, TOKEN_PRINT, TOKEN_LPAREN, TOKEN_RPAREN, TOKEN_SEMICOLON, TOKEN_EOF
} TokenType;

typedef struct {
    TokenType type;
    char *value;
} Token;

typedef struct {
    Token *tokens;
    int count;
} TokenList;

TokenList *lex(const char *source);

#endif // LEXER_H
