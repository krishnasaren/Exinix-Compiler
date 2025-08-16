#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include "assembler.h"


// Advanced assembler for x86_64: parses assembly, emits opcodes, writes COFF object

// COFF header and section structures (see Microsoft PE/COFF spec)
typedef struct {
    uint16_t Machine;
    uint16_t NumberOfSections;
    uint32_t TimeDateStamp;
    uint32_t PointerToSymbolTable;
    uint32_t NumberOfSymbols;
    uint16_t SizeOfOptionalHeader;
    uint16_t Characteristics;
} CoffHeader;

typedef struct {
    char Name[8];
    uint32_t VirtualSize;
    uint32_t VirtualAddress;
    uint32_t SizeOfRawData;
    uint32_t PointerToRawData;
    uint32_t PointerToRelocations;
    uint32_t PointerToLinenumbers;
    uint16_t NumberOfRelocations;
    uint16_t NumberOfLinenumbers;
    uint32_t Characteristics;
} SectionHeader;

// TODO: Symbol table, relocations, etc.

typedef struct {
    uint8_t *data;
    size_t size;
    size_t capacity;
} BinBuffer;

static void binbuf_init(BinBuffer *buf) {
    buf->capacity = 4096;
    buf->size = 0;
    buf->data = (uint8_t*)malloc(buf->capacity);
}
static void binbuf_write(BinBuffer *buf, uint8_t byte) {
    if (buf->size >= buf->capacity) {
        buf->capacity *= 2;
        buf->data = (uint8_t*)realloc(buf->data, buf->capacity);
    }
    buf->data[buf->size++] = byte;
}

// Example: encode 'ret' instruction
static void encode_ret(BinBuffer *buf) {
    binbuf_write(buf, 0xC3);
}

// TODO: Add encoding for mov, add, etc.

// Write minimal COFF object file
static void write_coff_object(FILE *out, BinBuffer *code) {
    CoffHeader coff = {0};
    coff.Machine = 0x8664; // x86_64
    coff.NumberOfSections = 1;
    coff.SizeOfOptionalHeader = 0;
    coff.Characteristics = 0x0002; // Executable
    fwrite(&coff, sizeof(coff), 1, out);
    SectionHeader text = {0};
    memcpy(text.Name, ".text", 5);
    text.SizeOfRawData = (uint32_t)code->size;
    text.PointerToRawData = sizeof(coff) + sizeof(text);
    text.Characteristics = 0x60000020; // Code, execute, read
    fwrite(&text, sizeof(text), 1, out);
    // Write code section
    fwrite(code->data, 1, code->size, out);
    // TODO: Write symbol table, relocations
}

int assemble(const char *asm_file, const char *obj_file) {
    FILE *in = fopen(asm_file, "r");
    if (!in) return 1;
    BinBuffer code;
    binbuf_init(&code);
    char line[256];
    while (fgets(line, sizeof(line), in)) {
        if (strstr(line, "ret")) {
            encode_ret(&code);
        }
        // TODO: Parse and encode other instructions
    }
    fclose(in);
    FILE *out = fopen(obj_file, "wb");
    if (!out) return 1;
    write_coff_object(out, &code);
    fclose(out);
    free(code.data);
    return 0;
}
