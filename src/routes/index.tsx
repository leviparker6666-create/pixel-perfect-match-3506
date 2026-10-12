import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-warehouse.jpg";

const CTA_URL = "https://halcyonglobal.eu/pt/amazon-prep/";
const CTA_LABEL = "Pedir orçamento de Amazon Prep";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Amazon Prep em Espanha para vendedores portugueses | Halcyon" },
      {
        name: "description",
        content:
          "Guia prático para e-commerce português: como preparar produtos para Amazon FBA através de um parceiro de prep em Espanha, etapas, checklist e FAQ.",
      },
      { property: "og:title", content: "Amazon Prep em Espanha: guia para vendedores portugueses" },
      {
        property: "og:description",
        content: "Fluxo Portugal–Espanha–Amazon FBA, responsabilidades, checklist e cuidados a confirmar.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Guide,
});

function Cta() {
  return (
    <a href={CTA_URL} className="cta-primary">
      {CTA_LABEL} <span aria-hidden>→</span>
    </a>
  );
}

const toc = [
  ["o-que-e", "O que é o Amazon Prep"],
  ["fluxo", "Fluxo Portugal → Espanha → FBA"],
  ["quem", "Quem pode beneficiar"],
  ["etapas", "Processo por etapas"],
  ["informacao", "Informação para a proposta"],
  ["cuidados", "Cuidados a confirmar"],
  ["checklist", "Checklist"],
  ["faq", "Perguntas frequentes"],
  ["fontes", "Fontes oficiais"],
];

const tasks = [
  ["Receção", "Descarga da mercadoria e registo da entrada face ao que foi anunciado pelo vendedor."],
  ["Inspeção", "Verificação de quantidades, estado visível das embalagens e eventuais discrepâncias."],
  ["Etiquetagem", "Aplicação de etiquetas de produto (FNSKU), quando exigidas, e etiquetas de caixa da remessa."],
  ["Embalagem", "Proteção, ensacamento ou embalagem adicional conforme o tipo de produto e os requisitos da Amazon."],
  ["Preparação por unidade", "Tratamento unitário: sacos com aviso, plástico-bolha, agrupamento de conjuntos, etc."],
  ["Expedição para FBA", "Preparação das caixas ou paletes e entrega ao transporte com destino ao centro FBA indicado."],
];

const steps = [
  ["Diagnóstico do catálogo", "Reúne os ASIN/SKU, dimensões, materiais e requisitos de preparação de cada produto, consultando a documentação da Amazon."],
  ["Pedido de proposta", "Envia ao parceiro a informação do catálogo, volumes previstos e necessidades de transporte. O parceiro confirma o que pode fazer e em que condições."],
  ["Plano de envio na Amazon", "No Seller Central, crias o envio e obténs as etiquetas e o destino FBA atribuído pela Amazon."],
  ["Transporte Portugal → Espanha", "A mercadoria segue do teu armazém ou fornecedor para o centro do parceiro, com o transporte acordado entre as partes."],
  ["Receção e preparação", "O parceiro recebe, inspeciona, etiqueta e embala conforme as instruções acordadas e reporta discrepâncias."],
  ["Expedição para o centro FBA", "As caixas ou paletes seguem para o destino definido pela Amazon. A Amazon faz a sua própria receção e disponibiliza o stock."],
  ["Reconciliação", "Comparas as unidades enviadas, preparadas e recebidas pela Amazon, e tratas eventuais diferenças com quem for responsável."],
];

const checklist = [
  "Lista de SKU/ASIN com dimensões, peso e materiais",
  "Requisitos de preparação de cada produto verificados na documentação da Amazon",
  "Etiquetas FNSKU: quem as imprime e aplica",
  "Volumes previstos (unidades, caixas, paletes) e frequência de envios",
  "Origem do stock: armazém próprio, fornecedor ou importação",
  "Destino FBA e marketplace(s) previstos",
  "Transporte Portugal–Espanha: quem contrata, quem paga, prazo indicativo",
  "Seguro e responsabilidade em caso de dano ou perda",
  "Processo de reporte de discrepâncias e fotografias",
  "Condições de armazenamento temporário no parceiro, se aplicável",
  "Custos detalhados por tarefa, confirmados por escrito",
  "Produtos com restrições (perigosos, validade, frágeis) identificados",
];

const faqs = [
  ["Posso usar um centro em Espanha se vendo a partir de Portugal?", "Em princípio, a localização do parceiro de prep é uma escolha logística do vendedor. O que importa é que a mercadoria chegue ao centro FBA atribuído pela Amazon cumprindo os requisitos. Confirma no Seller Central as regras aplicáveis à tua conta e aos marketplaces onde vendes."],
  ["O parceiro de prep garante que a Amazon aceita a mercadoria?", "Não. O parceiro pode executar a preparação conforme as instruções e os requisitos publicados, mas a receção e a aceitação final são decididas pela Amazon. Define por escrito quem responde por cada tipo de erro."],
  ["Quanto custa e quanto tempo demora?", "Depende do produto, do volume, das tarefas e do transporte. Esta página não apresenta preços nem prazos: pede uma proposta e confirma as condições diretamente com o parceiro."],
  ["Quem cria o plano de envio na Amazon?", "Normalmente é o vendedor, a partir da sua conta Seller Central. Se o parceiro tiver alguma intervenção nesse passo, isso deve ficar acordado previamente."],
  ["Os requisitos de preparação da Amazon mudam?", "Sim, a Amazon pode atualizar requisitos e políticas. Consulta sempre as páginas oficiais antes de cada envio e não te bases apenas em guias de terceiros, incluindo esta."],
  ["Preciso de enviar todo o stock para Espanha?", "Não necessariamente. Podes combinar preparação interna com um parceiro, por exemplo para picos de volume ou para determinados produtos. Avalia custos de transporte e controlo de stock em cada cenário."],
];

const sources = [
  ["Requisitos de embalagem e preparação (Seller Central Europa)", "https://sellercentral-europe.amazon.com/help/hub/reference/external/G201023020"],
  ["Logística da Amazon (FBA) – informação oficial", "https://sell.amazon.es/logistica-de-amazon"],
  ["Central de ajuda do Seller Central Europa", "https://sellercentral-europe.amazon.com/help/hub/reference/external/G2"],
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-14">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Guide() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-bold text-foreground">
            Halcyon <span className="font-sans text-sm font-normal text-muted-foreground">· Guia Amazon Prep</span>
          </span>
          <a href={CTA_URL} className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            {CTA_LABEL}
          </a>
        </div>
      </header>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">Guia para e-commerce em Portugal</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Preparar produtos para o Amazon FBA com um parceiro de prep em Espanha
            </h1>
            <p className="mt-5 text-lg opacity-80">
              Como funciona o fluxo de Portugal até aos centros da Amazon, o que depende de cada parte e o que deves confirmar antes de enviar stock.
            </p>
            <div className="mt-8"><Cta /></div>
            <p className="mt-6 max-w-lg text-xs opacity-60">
              Esta página é publicada pela Halcyon, que presta o serviço de Amazon Prep aqui descrito. Não é uma recomendação editorial independente.
            </p>
          </div>
          <img src={hero} alt="Operadora a etiquetar caixas num armazém de fulfillment" width={1600} height={1008} className="h-full w-full rounded-lg object-cover" />
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[220px_1fr]">
        <aside className="hidden md:block">
          <nav className="sticky top-24 py-14 text-sm">
            <p className="mb-3 font-semibold text-foreground">Neste guia</p>
            <ul className="space-y-2">
              {toc.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="text-muted-foreground hover:text-primary">{label}</a></li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="max-w-3xl">
          <Section id="o-que-e" eyebrow="Conceitos" title="O que é o Amazon Prep">
            <p>
              Amazon Prep é o conjunto de tarefas que deixam a mercadoria pronta para entrar num centro de Logística da Amazon (FBA) de acordo com os requisitos publicados pela Amazon. Pode ser feito pelo próprio vendedor ou por um parceiro externo.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              {tasks.map(([t, d]) => (
                <div key={t} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold text-card-foreground">{t}</h3>
                  <p className="mt-1 text-sm">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-sm">As tarefas exatas incluídas num serviço devem ser confirmadas na proposta do parceiro.</p>
          </Section>

          <Section id="fluxo" eyebrow="Logística" title="Fluxo de mercadoria: Portugal → Espanha → Amazon">
            <div className="flex flex-col gap-3 rounded-lg bg-secondary p-5 text-sm font-medium text-secondary-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>Armazém / fornecedor em Portugal</span><span aria-hidden className="text-primary">→</span>
              <span>Parceiro de prep em Espanha</span><span aria-hidden className="text-primary">→</span>
              <span>Centro FBA atribuído pela Amazon</span>
            </div>
            <div className="grid gap-4 pt-2 md:grid-cols-3">
              {[
                ["Vendedor", ["Catálogo e conformidade dos produtos", "Plano de envio no Seller Central", "Instruções de preparação", "Decisão sobre transporte"]],
                ["Parceiro de prep", ["Receção e inspeção", "Preparação acordada", "Reporte de discrepâncias", "Entrega ao transporte para FBA"]],
                ["Amazon", ["Requisitos de preparação e políticas", "Atribuição do centro de destino", "Receção e aceitação no FBA", "Armazenamento e envio ao cliente"]],
              ].map(([who, items]) => (
                <div key={who as string} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold text-primary">{who as string}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm">
                    {(items as string[]).map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm">Esta divisão é indicativa: a repartição real de responsabilidades deve ficar escrita no acordo com o parceiro.</p>
          </Section>

          <Section id="quem" eyebrow="Decisão" title="Quem pode beneficiar e como decidir">
            <p>Um parceiro de prep tende a fazer sentido para vendedores que:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>não têm espaço ou equipa para preparar unidades com regularidade;</li>
              <li>recebem stock de fornecedores e preferem não o manusear duas vezes;</li>
              <li>enfrentam picos sazonais de volume;</li>
              <li>querem reduzir erros de etiquetagem e embalagem.</li>
            </ul>
            <p>Antes de escolher entre preparar internamente ou contratar, avalia:</p>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-secondary-foreground"><tr><th className="p-3">Fator</th><th className="p-3">Pergunta a fazer</th></tr></thead>
                <tbody className="divide-y divide-border bg-card">
                  {[
                    ["Volume", "Quantas unidades preparo por mês e com que variação?"],
                    ["Complexidade", "Os meus produtos exigem preparação unitária específica?"],
                    ["Custo total", "Mão de obra e materiais internos vs. tarifa do parceiro + transporte adicional."],
                    ["Controlo", "Que visibilidade preciso sobre o stock e as discrepâncias?"],
                    ["Distância", "O transporte Portugal–Espanha compensa face a outras opções?"],
                  ].map(([f, q]) => (
                    <tr key={f}><td className="p-3 font-medium text-foreground">{f}</td><td className="p-3">{q}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="etapas" eyebrow="Processo" title="Processo explicado por etapas">
            <ol className="space-y-5">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground">{i + 1}</span>
                  <div><h3 className="font-semibold text-foreground">{t}</h3><p className="mt-1">{d}</p></div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="informacao" eyebrow="Preparação" title="Informação a reunir antes de pedir uma proposta">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Produtos", "Tipologia, SKU/ASIN, dimensões, peso, fragilidade, materiais."],
                ["Unidades", "Volume por envio e previsão mensal, em unidades, caixas ou paletes."],
                ["Requisitos de preparação", "O que a Amazon exige para cada produto e quem fornece etiquetas e materiais."],
                ["Origem do stock", "Armazém próprio em Portugal, fornecedor nacional ou importação."],
                ["Destino FBA", "Marketplace(s) e centros atribuídos no plano de envio."],
                ["Transporte", "Recolha em Portugal, envio para Espanha e envio para a Amazon: quem trata de cada trajeto."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-lg border-l-4 border-primary bg-card p-5">
                  <h3 className="font-semibold text-foreground">{t}</h3><p className="mt-1 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="cuidados" eyebrow="Atenção" title="Cuidados a confirmar">
            <ul className="space-y-3">
              {[
                ["Requisitos FBA", "Verifica-os nas páginas oficiais da Amazon antes de cada envio; podem mudar."],
                ["Custos", "Pede o detalhe por tarefa, materiais, armazenamento e transporte. Qualquer estimativa é indicativa até ser confirmada por escrito."],
                ["Prazos", "Os prazos de preparação, transporte e receção na Amazon variam. Não os trates como garantias."],
                ["Stock", "Define como são reportadas entradas, saídas e discrepâncias, e como reconcilias com os dados da Amazon."],
                ["Transporte Portugal–Espanha", "Esclarece quem contrata, quem assume o risco durante o trajeto e que documentação acompanha a mercadoria."],
                ["Responsabilidades", "Formaliza quem responde por erros de etiquetagem, danos, perdas ou rejeições na receção FBA."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-lg bg-accent p-4 text-accent-foreground"><strong>{t}.</strong> {d}</li>
              ))}
            </ul>
          </Section>

          <Section id="checklist" eyebrow="Ferramenta" title="Checklist antes do primeiro envio">
            <ul className="grid gap-2 sm:grid-cols-2">
              {checklist.map((c) => (
                <li key={c} className="flex gap-3 rounded-md border border-border bg-card p-3 text-sm">
                  <span aria-hidden className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-primary" />{c}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="faq" eyebrow="Dúvidas" title="Perguntas frequentes">
            <div className="divide-y divide-border rounded-lg border border-border bg-card">
              {faqs.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold text-foreground">
                    <span className="mr-2 text-primary group-open:hidden">+</span><span className="mr-2 hidden text-primary group-open:inline">−</span>{q}
                  </summary>
                  <p className="mt-3 text-sm">{a}</p>
                </details>
              ))}
            </div>
          </Section>

          <Section id="fontes" eyebrow="Referências" title="Fontes oficiais da Amazon">
            <p>Os requisitos e políticas citados devem ser sempre confirmados diretamente nas fontes da Amazon (algumas exigem sessão iniciada no Seller Central):</p>
            <ul className="list-disc space-y-1 pl-5">
              {sources.map(([l, u]) => (
                <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="text-primary underline">{l}</a></li>
              ))}
            </ul>
          </Section>
        </main>
      </div>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">Já tens a informação reunida?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-80">Envia os dados do teu catálogo e volumes. A Halcyon confirmará o que pode preparar e em que condições.</p>
          <div className="mt-8"><Cta /></div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Conteúdo publicado pela Halcyon, prestadora do serviço de Amazon Prep apresentado. Amazon e FBA são marcas da Amazon.com, Inc. ou das suas afiliadas.
      </footer>
    </div>
  );
}
