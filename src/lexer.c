#include "lexer.h"
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

static Token make_token(TokenType type, const char *start, int length) {
    Token token;
    token.type = type;
    token.value = (char*)malloc(length + 1);
    strncpy(token.value, start, length);
    token.value[length] = '\0';
    return token;
}

TokenList *lex(const char *source) {
    int len = strlen(source);
    Token *tokens = (Token*)malloc(sizeof(Token) * (len + 1));
    int count = 0;
    int i = 0;
    while (i < len) {
        if (isspace(source[i])) {
            i++;
            continue;
        }
        if (isalpha(source[i])) {
            int start = i;
            while (isalnum(source[i]) || source[i] == '_') i++;
            int kwlen = i - start;
            if (kwlen == 5 && strncmp(&source[start], "print", 5) == 0) {
                tokens[count++] = make_token(TOKEN_PRINT, &source[start], kwlen);
            } else {
                tokens[count++] = make_token(TOKEN_ID, &source[start], kwlen);
            }
            continue;
        }
        if (isdigit(source[i])) {
            int start = i;
            while (isdigit(source[i])) i++;
            tokens[count++] = make_token(TOKEN_NUMBER, &source[start], i - start);
            continue;
        }
        switch (source[i]) {
            case '=':
                tokens[count++] = make_token(TOKEN_ASSIGN, &source[i], 1);
                i++;
                break;
            case '+':
                tokens[count++] = make_token(TOKEN_PLUS, &source[i], 1);
                i++;
                break;
            case '(': 
                tokens[count++] = make_token(TOKEN_LPAREN, &source[i], 1);
                i++;
                break;
            case ')':
                tokens[count++] = make_token(TOKEN_RPAREN, &source[i], 1);
                i++;
                break;
            case ';':
                tokens[count++] = make_token(TOKEN_SEMICOLON, &source[i], 1);
                i++;
                break;
            default:
                i++;
                break;
        }
    }
    tokens[count++] = make_token(TOKEN_EOF, "", 0);
    TokenList *list = (TokenList*)malloc(sizeof(TokenList));
    list->tokens = tokens;
    list->count = count;
    return list;
}
