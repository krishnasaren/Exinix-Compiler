section .data
a: dq 0
b: dq 0
sum: dq 0
section .text
global main
main:
    mov rax, 10
    mov [a], rax
    mov rax, 20
    mov [b], rax
    mov rax, [a]
    mov rax, [b]
    add rax, rbx
    mov rax, [b]
    mov [sum], rax
    mov rax, [sum]
    ; print rax (stub)
    ret
