    
    <body>
        <!-- PRE LOADER -->
        <div class="preloader">
             <div class="sk-spinner sk-spinner-pulse"></div>
        </div>

        <!-- Navigation Section -->
        <div class="navbar navbar-default navbar-static-top">
            <div class="container">

                <div class="navbar-header">
                    <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                    </button>
                    <a href=<?php echo base_url(); ?> class="navbar-brand">IQBAL RAHMAN</a>
                </div>

                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href=<?php echo base_url(); ?>>Home</a></li>
                        <li><a href=<?php echo base_url('/About'); ?>>About Me</a></li>
                        <li><a href=<?php echo base_url('/Projects'); ?>>My Project</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- Home Section -->
        <section id="home" class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" style="margin-bottom: 100px;"></div>

                    <div class="col-md-12 col-sm-12">
                        <h1 class="wow fadeInUp head" data-wow-delay="0.6s">Iqbal Rahman</h1>
                        <div class="row" style="margin-top: 5%">
                            <div class="col-sm-9">
                                <p class="wow fadeInUp lr-pd" data-wow-delay="0.8s">
                                    Hello! My name is Iqbal Rahman. I am D3 informatics engineering (IT) from 
                                    Electronic Engineering Polytechnic Institute of Surabaya (PENS), Indonesia.
                                    
                                </p>
                                    <div class="container button-about" id="cta" style="padding-top: 0px;">
                                        <a id="cta" href=<?php echo base_url('/About') ?> class="wow fadeInUp btn btn-success" data-wow-delay="0.8s">More About Me</a>
                                    </div>
                            </div>
                            <div class="col-sm-3 wow fadeInUp">
                                <div class="portfolio-thumb">
                                    <a href="img/foto.jpg" class="image-popup">
                                        <div class="portfolio-item-hover">
                                            <i class="fa fa-plus"></i>
                                        </div>
                                        <img src="img/foto.jpg" class="img-responsive" alt="Portfolio">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" style="margin-bottom: 50px;"></div>

                    <div class="col-md-12" style="max-height: 70px; margin-bottom: 20px">
                        <div class="wow bounceIn section-title">
                            <h2>My Project</h2>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        
                    
                        <div class="work-box-section wow fadeInUp" data-wow-delay="1.4s">
                            <div class="work-box-wrapper col4-work-box">

                                <div class="work-box graphic print branding html col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/belajarekspor.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/belajarekspor.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>

                                <div class="work-box graphic print col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/boi.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/boi.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>

                                <div class="work-box branding apps col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/companyprofile.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/companyprofile.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>

                                <div class="work-box graphic apps col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/perpustakaan.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/perpustakaan.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>

                                <div class="work-box web apps col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/transprima.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/transprima.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>

                                <div class="work-box web print col-md-4 col-sm-6">
                                    <div class="portfolio-thumb">
                                        <a href="project/webgis.png" class="image-popup">
                                            <div class="portfolio-item-hover">
                                                <i class="fa fa-plus"></i>
                                            </div>
                                            <img src="project/webgis.png" class="img-responsive" alt="Portfolio">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-offset-2 col-md-8 col-sm-12" id="cta" style="padding-top: 0px; padding-bottom: 0px">
                            <a href="about.html" class="wow fadeInUp btn btn-success" data-wow-delay="0.8s">More About My Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section id="cta" class="bg-gray" style="padding-top: 50px; padding-bottom: 50px;">
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                        <div class="wow bounceIn section-title">
                            <h2>Connect With Me</h2>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <div class="footer-copyright">
                            <ul class="social-icon">	
                                <li><a href="https://www.facebook.com/iqbal.rahman.3154/" class="fa fa-facebook wow fadeInUp" data-wow-delay="0.2s"></a></li>
                                <li><a href="https://instagram.com/iqbalee_r" class="fa fa-instagram wow fadeInUp" data-wow-delay="0.4s"></a></li>
                                <li><a href="https://www.linkedin.com/in/iqbalrahman-dev/" class="fa fa-linkedin wow fadeInUp" data-wow-delay="0.6s"></a></li>
                                <li><a href="https://wa.me/6287853008599" class="fa fa-whatsapp wow fadeInUp" data-wow-delay="0.8s"></a></li>
                                <li><a href="mailto:iqbalrahman.amd@gmail.com" class="fa fa-envelope wow fadeInUp" data-wow-delay="1s"></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>