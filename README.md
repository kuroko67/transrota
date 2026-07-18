# CID Fretes — Landing Page

Landing page moderna e conversiva para um serviço de frete com caminhão
próprio/particular, construída com Next.js (App Router + TypeScript),
Tailwind CSS, Lucide React e Framer Motion.

## Estrutura do projeto

```
transrota/
├── app/
│   ├── layout.tsx        # Layout raiz, fontes e metadata
│   ├── page.tsx          # Composição das seções da landing page
│   └── globals.css       # Estilos globais e tokens do Tailwind
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FreightSimulatorForm.tsx
│   ├── Differentials.tsx
│   ├── TruckShowcase.tsx # Galeria de fotos reais + ficha técnica do caminhão
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── RouteDivider.tsx  # Elemento visual assinatura (linha de rota)
├── lib/
│   └── data.ts            # Conteúdo textual (nav, caminhão, depoimentos, FAQ)
├── public/
│   └── images/             # Fotos reais do caminhão (caminhao-1.jpg, 2, 3)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Como rodar

1. Certifique-se de ter o **Node.js 18.18+** instalado.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm run start
```

## Notas de implementação

- As fotos do caminhão em `public/images/` (`caminhao-1.jpg`, `caminhao-2.jpg`,
  `caminhao-3.jpg`) são as fotos reais fornecidas. Para trocar, basta
  substituir os arquivos com o mesmo nome ou atualizar os caminhos em
  `lib/data.ts` (`truckGallery`) e em `components/Hero.tsx`.
- Os valores de capacidade/volume em `lib/data.ts` (`truckSpecs`) são
  **estimativas de exemplo** — atualize com os dados reais do veículo antes
  de publicar.
- Telefone, e-mail e endereço no rodapé (`components/Footer.tsx`) são
  placeholders — troque pelos dados reais de contato.
- O formulário "Simular Frete" (Hero) e o formulário de "Solicitar Cotação"
  (seção final) são **simulados no front-end** — não enviam dados para
  nenhum servidor. Para produção, conecte-os a uma API route do Next.js, a
  um CRM ou a um serviço de e-mail transacional (ou a um link do WhatsApp).
- A paleta de cores e as fontes (Barlow Condensed, Inter, IBM Plex Mono)
  estão centralizadas em `tailwind.config.ts` e `app/layout.tsx`.
