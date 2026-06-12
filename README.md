# Cafe App

## Git Workflow

Branches permanentes: `main` e `test`.

```
main ──────────────────────────────────────────► (produção)
  │                                                  ▲
  └── branch (feature/fix) ──► test (validação) ────┘
                │                     │
                │                não aprovado
                │                     │
                └─────────────────────┘
```

### Fluxo

1. Crie uma branch a partir de `main`:
   ```bash
   git checkout main
   git checkout -b feature/nome-da-feature
   ```

2. Desenvolva e envie para `test` para validação:
   ```bash
   git checkout test
   git merge feature/nome-da-feature
   git push origin test
   ```

3. **Aprovado** — merge na `main`:
   ```bash
   git checkout main
   git merge feature/nome-da-feature
   git push origin main
   ```

4. **Não aprovado** — corrija na branch e repita o passo 2:
   ```bash
   git checkout feature/nome-da-feature
   # faça as correções
   git checkout test
   git merge feature/nome-da-feature
   git push origin test
   ```
