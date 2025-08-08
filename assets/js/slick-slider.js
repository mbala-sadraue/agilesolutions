   // Lista de itens (pode ser dinâmica, vinda de uma API, etc.)
        let itens = [
            { id: 1, titulo: "Database Security", descricao: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.", imagem: "assets/images/services/service-02.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 2, titulo: "Cloud Computing", descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imagem: "assets/images/services/service-05.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 3, titulo: "Web Development", descricao: "Suspendisse potenti. Vivamus in magna non ipsum.", imagem: "assets/images/services/service-03.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 4, titulo: "Network Security", descricao: "Fusce dapibus, tellus ac cursus commodo.", imagem: "assets/images/services/service-04.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 5, titulo: "AI Solutions", descricao: "Nulla vitae elit libero, a pharetra augue.", imagem: "assets/images/services/service-05.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 6, titulo: "Data Analytics", descricao: "Cras mattis consectetur purus sit amet.", imagem: "assets/images/services/service-02.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" },
            { id: 7, titulo: "Cybersecurity", descricao: "Donec sed odio dui. Aenean eu leo quam.", imagem: "assets/images/services/service-02.jpg", icone: "assets/images/icons/construction.svg", shape: "assets/images/shape/service-two-item-shape.png" }
        ];
        let indiceAtual = 0;
        const itensPorSlide = 3; // Quantidade de itens visíveis por slide

        // Função para inicializar o carrossel
        function inicializarCarrossel() {
            const $carousel = $('#meuCarrossel');
            $carousel.empty(); // Limpa o conteúdo atual

            // Adiciona os itens visíveis
            for (let i = indiceAtual; i < indiceAtual + itensPorSlide && i < itens.length; i++) {
                const item = itens[i];
                const slide = `
                    <div>
                        <div class="service-two__item">
                            <div class="image">
                                <img src="${item.imagem}" alt="image">
                            </div>
                            <div class="service-two__content">
                                <div class="icon">
                                    <img src="${item.icone}" alt="icon" style="width: 35px;">
                                </div>
                                <div class="shape">
                                    <img src="${item.shape}" alt="shape">
                                </div>
                                <h4><a href="service-details.html" class="primary-hover">${item.titulo}</a></h4>
                                <p>${item.descricao}</p>
                                <a class="read-more-btn" href="service-details.html">Read More <i class="fa-regular fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                `;
                $carousel.append(slide);
            }
            // Inicializa o Slick Slider
            $carousel.slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                autoplay: true,
                arrows:false,
                rows:4,
                arrows:false,
                accessibility:false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });

        }
        // Função para atualizar o carrossel
        function atualizarCarrossel() {
            const $carousel = $('#meuCarrossel');
            $carousel.slick('unslick'); // Desativa o Slick para re-renderizar
            $carousel.empty(); // Limpa o conteúdo atual

            // Adiciona os novos itens visíveis
            for (let i = indiceAtual; i < indiceAtual + itensPorSlide && i < itens.length; i++) {
                const item = itens[i];
                const slide = `
                    
                        <div class="service-two__item">
                            <div class="image">
                                <img src="${item.imagem}" alt="image">
                            </div>
                            <div class="service-two__content">
                                <div class="icon">
                                    <img src="${item.icone}" alt="icon" style="width: 35px;">
                                </div>
                                <div class="shape">
                                    <img src="${item.shape}" alt="shape">
                                </div>
                                <h4><a href="service-details.html" class="primary-hover">${item.titulo}</a></h4>
                                <p>${item.descricao}</p>
                                <a class="read-more-btn" href="service-details.html">Read More <i class="fa-regular fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    
                `;
                $carousel.append(slide);
            }
            // Re-inicializa o Slick Slider
            $('#meuCarrossel').slick({
                slidesToShow: itensPorSlide,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: false,
                speed: 600,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        // Inicializa o carrossel na carga da página
        $(document).ready(function () {
            inicializarCarrossel();
        });