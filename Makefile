CC = gcc
CFLAGS = -O2 -Wall -std=c17
SRC = src/main.c src/lexer.c src/parser.c src/ir.c src/optimizer.c src/codegen.c src/symbol_table.c src/utils.c
OBJ = $(SRC:.c=.o)
INCLUDE = -Iinclude
TARGET = mcompiler.exe

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) $(CFLAGS) $(OBJ) -o $(TARGET)

%.o: %.c
	$(CC) $(CFLAGS) $(INCLUDE) -c $< -o $@

clean:
	del $(OBJ) $(TARGET)
