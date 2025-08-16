#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include "linker.h"

// Advanced linker for Windows PE x86_64
// TODO: Parse COFF object, write PE header, sections, entry point


// Minimal PE header for Windows x86_64
// Advanced linker for Windows PE x86_64
// TODO: Parse COFF object, write PE header, sections, entry point

typedef struct {
    uint8_t dos_header[64];
    uint8_t pad[64];
    uint8_t pe_sig[4];
    uint8_t coff_header[20];
    uint8_t opt_header[240];
    uint8_t section_header[40];
} PEHeaders;

// TODO: Parse COFF object file for code/data sections, symbols, entry point
static void write_pe_headers(FILE *out) {
    PEHeaders pe = {0};
    // DOS header
    pe.dos_header[0] = 0x4D; pe.dos_header[1] = 0x5A; // 'MZ'
    pe.dos_header[60] = 0x80; // e_lfanew = 0x80
    // PE signature
    pe.pe_sig[0] = 'P'; pe.pe_sig[1] = 'E';
    // COFF header
    pe.coff_header[0] = 0x64; pe.coff_header[1] = 0x86; // Machine: x86_64
    pe.coff_header[2] = 0x01; pe.coff_header[3] = 0x00; // Number of sections
    pe.coff_header[18] = 0x02; pe.coff_header[19] = 0x00; // Characteristics
    // TODO: Fill in optional header and section header fields
    fwrite(&pe, sizeof(pe), 1, out);
}

int link(const char *obj_file, const char *exe_file) {
    FILE *in = fopen(obj_file, "rb");
    FILE *out = fopen(exe_file, "wb");
    if (!in || !out) return 1;
    write_pe_header(out);
    // Write code section after headers (stub)
    char buf[4096];
    while (!feof(in)) {
        size_t n = fread(buf, 1, sizeof(buf), in);
        fwrite(buf, 1, n, out);
    }
    fclose(in);
    fclose(out);
    return 0;
}
