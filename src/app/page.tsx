import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Bed,
  Sofa,
  Moon,
  ArrowRight,
  Menu
} from 'lucide-react';
 
// URL fictícia ou real do WhatsApp da loja
const WHATSAPP_URL = "https://wa.me/55479979851424?text=Ol%C3%A1!+Gostaria+de+receber+uma+consultoria+personalizada+sobre+colch%C3%B5es+e+estofados.%22";
 
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased scroll-smooth">
     
      {/* 1. HEADER (NAVEGAÇÃO) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              BLUMENAU
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-400 -mt-1">
              Colchões & Estofados
            </span>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#beneficios" className="hover:text-amber-400 transition-colors">Benefícios</a>
            <a href="#produtos" className="hover:text-amber-400 transition-colors">Produtos</a>
            <a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização</a>
          </nav>
 
          {/* CTA Header */}
          <div className="hidden md:flex items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-amber-500/10 transition-all flex items-center gap-2 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Falar com Consultor
            </a>
          </div>
 
          {/* Mobile Menu Icon (Placeholder para interatividade) */}
          <button className="md:hidden text-slate-300 p-2" aria-label="Abrir menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
 
      <main>
        {/* 2. HERO SECTION */}
        <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden py-20 lg:py-32">
          {/* Detalhe de iluminação de fundo (Glow effect) */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
         
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
             
              {/* Texto Principal */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Exclusividade no Centro de Blumenau
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  O despertar perfeito começa com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">conforto que você merece.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Mais do que colchões e estofados, entregamos saúde do sono e design sob medida para o seu lar. Atendimento humanizado e consultoria personalizada bem no coração de Blumenau.
                </p>
               
                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 text-center px-8 py-4 rounded-xl font-bold shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group text-base"
                  >
                    Garantir Meu Atendimento VIP
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#produtos"
                    className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 text-center px-8 py-4 rounded-xl font-medium transition-all text-base"
                  >
                    Ver Catálogo
                  </a>
                </div>
              </div>
 
              {/* Box/Placeholder de Imagem de Destaque */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-700/50 border border-slate-700/60 p-4 shadow-2xl relative flex flex-col justify-end overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />
                  {/* Div simulando uma imagem premium */}
                  <div className="w-full h-full absolute inset-0 flex items-center justify-center text-slate-600">
                    <Bed className="w-20 h-20 opacity-20" />
                  </div>
                  <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Lançamento</p>
                    <h3 className="text-lg font-bold text-white">Linha Splendor Mattresses</h3>
                    <p className="text-xs text-slate-400">Tecnologia de resfriamento ativo e suporte ortopédico premium.</p>
                  </div>
                </div>
              </div>
 
            </div>
          </div>
        </section>
 
        {/* 3. DIFERENCIAIS / BENEFÍCIOS */}
        <section id="beneficios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Por que escolher a Blumenau Colchões?
              </h2>
              <p className="mt-4 text-slate-600">
                Unimos a tradição do atendimento local com o que há de mais moderno e tecnológico para o seu descanso e bem-estar.
              </p>
            </div>
 
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefício 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Entrega Rápida & Grátis</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Logística ágil e cuidadosa em toda a região central e bairros de Blumenau. Agendado no seu horário.
                </p>
              </div>
 
              {/* Benefício 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Alta Durabilidade</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Trabalhamos exclusivamente com matérias-primas certificadas, espumas de alta densidade e molejos de última geração.
                </p>
              </div>
 
              {/* Benefício 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Consultoria do Sono</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Nossos especialistas analisam seu biotipo e hábitos de sono para indicar a firmeza e o molejo ideal.
                </p>
              </div>
 
              {/* Benefício 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pagamento Facilitado</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Parcelamento facilitado no cartão de crédito ou condições especiais no boleto e Pix.
                </p>
              </div>
            </div>
          </div>
        </section>
 
        {/* 4. CATEGORIAS DE PRODUTOS */}
        <section id="produtos" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Nossas Linhas Exclusivas
              </h2>
              <p className="mt-4 text-slate-600">
                Produtos selecionados para transformar a energia da sua casa e a qualidade da sua saúde.
              </p>
            </div>
 
            <div className="grid md:grid-cols-3 gap-8">
              {/* Categoria 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/60 flex flex-col h-full group">
                <div className="h-48 bg-slate-800 text-slate-600 flex items-center justify-center relative">
                  <Bed className="w-16 h-16 opacity-30 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">Premium</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Colchões Especiais</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Opções em Molas Ensacadas Individuais, Látex Natural e Ortopédicos de Alta Performance. Alinhamento perfeito da coluna.
                    </p>
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 mt-4 group/btn">
                    Consultar Modelos <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
 
              {/* Categoria 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/60 flex flex-col h-full group">
                <div className="h-48 bg-slate-800 text-slate-600 flex items-center justify-center relative">
                  <Sofa className="w-16 h-16 opacity-30 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">Sob Medida</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Estofados & Sofás</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Estofados retráteis, reclináveis e cantos sob medida. Espumas premium e tecidos nobres (linho, boucle e couro sintético).
                    </p>
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 mt-4 group/btn">
                    Solicitar Orçamento <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
 
              {/* Categoria 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/60 flex flex-col h-full group">
                <div className="h-48 bg-slate-800 text-slate-600 flex items-center justify-center relative">
                  <Moon className="w-16 h-16 opacity-30 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">Ergonomia</span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Travesseiros & Acessórios</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Travesseiros cervicais, tecnologia Nasa, protetores impermeáveis e acessórios essenciais para manter o ambiente do sono higiênico.
                    </p>
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 mt-4 group/btn">
                    Ver Acessórios <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* 5. SEÇÃO DE LOCALIZAÇÃO & CONTATO */}
        <section id="localizacao" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
             
              {/* Informações de Contato */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Venha nos visitar
                  </h2>
                  <p className="mt-3 text-slate-600">
                    Estacionamento próprio no local para seu total conforto enquanto escolhe o mobiliário do seu lar.
                  </p>
                </div>
 
                <div className="space-y-6">
                  {/* Endereço */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Endereço</h4>
                      <p className="text-sm text-slate-600 mt-0.5">
                        R. 7 de Setembro, 1642 - Centro<br />
                        Blumenau - SC, 89010-204
                      </p>
                    </div>
                  </div>
 
                  {/* Horário */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                      <p className="text-sm text-slate-600 mt-0.5">
                        Segunda a Sexta: 09h às 18h<br />
                        Sábados: 09h às 13h
                      </p>
                    </div>
                  </div>
                </div>
 
                <div className="pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
                  >
                    Fale Conosco Agora via WhatsApp
                  </a>
                </div>
              </div>
 
              {/* Box Simulando o Google Maps */}
              <div className="lg:col-span-7">
                <div className="w-full aspect-[16/10] bg-slate-100 rounded-2xl border border-slate-200 shadow-inner overflow-hidden relative flex flex-col items-center justify-center text-center p-6 group">
                  {/* Grid de background simulando mapa */}
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                 
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-lg animate-bounce mb-4">
                      <MapPin className="w-8 h-8 fill-red-600/20" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Google Maps Integrado</h4>
                    <p className="text-sm text-slate-500 max-w-sm mt-1">
                      [Aqui será renderizado o iframe do mapa apontando para a R. 7 de Setembro no Centro de Blumenau]
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-xs font-semibold text-slate-700 underline hover:text-slate-900"
                    >
                      Abrir no app de Mapas
                    </a>
                  </div>
                </div>
              </div>
 
            </div>
          </div>
        </section>
      </main>
 
      {/* 6. FOOTER (RODAPÉ) */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-900 pb-8 mb-8">
            <div className="text-center md:text-left">
              <span className="text-lg font-bold text-white tracking-tight">BLUMENAU COLCHÕES</span>
              <p className="text-xs text-slate-500 mt-1">Sua saúde e conforto em primeiro lugar.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
              <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Blumenau Colchões & Estofados. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00 | Desenvolvido com foco em alta conversão.</p>
          </div>
        </div>
      </footer>
 
      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse group"
      >
        {/* Ícone customizado simples do WhatsApp usando SVG nativo para fidelidade visual */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-11.085c-.166-.277-.61-.443-1.275-.775-.664-.332-3.922-1.936-4.531-2.157-.609-.221-1.051-.332-1.494.332-.443.664-1.716 2.157-2.103 2.6-.387.443-.775.498-1.439.166-.664-.332-2.808-1.034-5.349-3.301-1.977-1.764-3.311-3.942-3.7-4.606-.389-.664-.041-1.023.292-1.353.299-.297.664-.775.996-1.162.332-.387.443-.664.664-1.107.221-.443.11-.829-.055-1.162-.166-.332-1.494-3.6-2.048-4.931-.54-1.297-1.091-1.12-1.494-1.14-.387-.02-.83-.023-1.274-.023-.443 0-1.161.166-1.77.83-.608.664-2.324 2.27-2.324 5.536 0 3.266 2.378 6.423 2.71 6.866.332.443 4.679 7.14 11.336 10.016 1.583.684 2.819 1.093 3.784 1.4 1.59.505 3.038.434 4.182.263 1.275-.19 3.922-1.603 4.475-3.153.553-1.55
          .553-2.879.387-3.155z"/>
        </svg>
        <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chamar no WhatsApp
          </span>
      </a>
 
    </div>
  );
}
 