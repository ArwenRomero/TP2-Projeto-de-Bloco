import React from 'react';
import './App.css';

function App() {
  return (
    <div className="pagina-principal">
      <section className="hero">
        <div className="hero-content">
          <h1>Avaliação e Crítica de Filmes</h1>
          <p>Explore filmes, escreva suas críticas e compartilhe suas avaliações com uma comunidade apaixonada por cinema.</p>
          <button className="cta-button">Explorar Agora</button>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2>Sobre a Plataforma</h2>
          <p>
            Nossa plataforma foi criada para entusiastas de cinema que desejam compartilhar suas opiniões e descobrir novos filmes baseados em avaliações reais. Oferecemos uma interface rica, integrada com a API do TMDB, que permite aos usuários explorar informações detalhadas sobre milhares de filmes e séries.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <i className="icon-integration"></i>
              <h3>Integração Completa</h3>
              <p>Sincronize suas avaliações e críticas com a API do TMDB para uma experiência imersiva.</p>
            </div>
            <div className="feature-item">
              <i className="icon-community"></i>
              <h3>Comunidade Ativa</h3>
              <p>Participe de discussões em tempo real e veja as críticas mais recentes da comunidade.</p>
            </div>
            <div className="feature-item">
              <i className="icon-recommendations"></i>
              <h3>Recomendações Inteligentes</h3>
              <p>Receba sugestões de filmes com base nas suas avaliações e preferências.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="features" id="features">
        <h2>Funcionalidades Principais</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <i className="icon-search"></i>
            <h3>Pesquisa de Filmes</h3>
            <p>Busque filmes diretamente da base de dados do TMDB e veja informações detalhadas.</p>
          </div>
          <div className="feature-card">
            <i className="icon-star"></i>
            <h3>Avaliação de Filmes</h3>
            <p>Avalie filmes com até 5 estrelas e compartilhe sua opinião com a comunidade.</p>
          </div>
          <div className="feature-card">
            <i className="icon-chat"></i>
            <h3>Críticas Detalhadas</h3>
            <p>Escreva e leia críticas detalhadas sobre filmes e séries de outros usuários.</p>
          </div>
          <div className="feature-card">
            <i className="icon-heart"></i>
            <h3>Recomendações Personalizadas</h3>
            <p>Baseadas em suas avaliações anteriores, receba sugestões que combinam com seus gostos.</p>
          </div>
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <h2>O que estão dizendo</h2>
        <div className="testimonials-content">
          <div className="testimonial">
            <p>"Uma das melhores plataformas de avaliação de filmes. Muito intuitiva!"</p>
            <span>- Ana Souza</span>
          </div>
          <div className="testimonial">
            <p>"Adoro poder ver o que outros pensam sobre os filmes que assisti."</p>
            <span>- João Pereira</span>
          </div>
          <div className="testimonial">
            <p>"Interface incrível e ótimas funcionalidades para críticos de cinema!"</p>
            <span>- Marina Dias</span>
          </div>
        </div>
      </section>
      <section className="statistics">
        <div className="container">
          <h2>Nossas Estatísticas</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>+10,000</h3>
              <p>Filmes avaliados</p>
            </div>
            <div className="stat-item">
              <h3>+5,000</h3>
              <p>Críticas publicadas</p>
            </div>
            <div className="stat-item">
              <h3>+50,000</h3>
              <p>Usuários ativos</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfação dos usuários</p>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-item">
            <h3>Como posso avaliar um filme?</h3>
            <p>Para avaliar um filme, basta criar uma conta, pesquisar pelo título e usar o sistema de estrelas para dar sua nota.</p>
          </div>
          <div className="faq-item">
            <h3>Posso editar minhas críticas?</h3>
            <p>Sim, você pode editar ou excluir suas críticas a qualquer momento diretamente no painel do usuário.</p>
          </div>
          <div className="faq-item">
            <h3>O serviço é gratuito?</h3>
            <p>Sim, nossa plataforma é totalmente gratuita e sempre será. Não há cobranças para avaliar ou criticar filmes.</p>
          </div>
        </div>
      </section>
      <section className="call-to-action" id="cadastro">
        <h2>Pronto para compartilhar suas críticas?</h2>
        <p>Junte-se à comunidade de amantes de cinema agora mesmo!</p>
        <button className="cta-button">Cadastre-se</button>
      </section>
      <footer className="rodape">
        <div className="footer-links">
          <a href="#features">Funcionalidades</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#cadastro">Cadastre-se</a>
        </div>
        <div className="footer-info">
          <p>TP2 de Projeto de Bloco - Arwen Romero</p>
          <p><a href="/politica-de-privacidade">Política de Privacidade</a> | <a href="/termos-de-uso">Termos de Uso</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
