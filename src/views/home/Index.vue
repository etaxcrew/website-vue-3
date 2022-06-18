<template>

    <div class="home">

        <!-- Document Wrapper
        ============================================= -->
        <div id="wrapper" class="clearfix">
            
            <!-- header -->
            <Header />
            <!-- end header -->

            <!-- slider -->
            <Slider />
            <!-- end slider -->

            <!-- Content
            ============================================= -->
            <section id="content" class="bg-white">
                <div class="content-wrap pt-6">

                        <div class="position-relative">
                            
                            <div class="container">
                                <div class="d-flex justify-content-between align-items-center bottommargin-sm">
                                    <div class="heading-block border-bottom-0 mb-0" style="max-width: 700px">
                                        <div class="fancy-title title-border mb-3"><h5 class="fw-normal color font-body text-uppercase ls1">Selayang Pandang</h5></div>
                                        <h2 class="fw-bold mb-4 nott" style="font-size: 42px; letter-spacing: -1px">Sambutan <span>Kepala Dinas</span></h2>
                                        <p>Dengan mengucap puji syukur Alhamdulillah Dinas Kelautan dan Perikanan Kabupaten Boalemo telah mewujudkan media informasi digital (Website). Media informasi ini berfungsi sebagai sarana publikasi untuk memberikan Informasi dan gambaran Dinas Kelautan dan Perikanan Kabupaten Boalemo dalam melaksanakan pelayanan di sektor Perikanan dan Kelautan.</p>
                                        <p>Melalui keberadaan website ini kiranya masyarakat dapat mengetahui seluruh informasi tentang Kebijakan Pemerintah Kabupaten Boalemo didalam pengelolaan sektor Kelautan dan Perikanan.</p>
                                    </div>
                                    <img src="/assets/images/yoga-img.svg" alt="Yoga Image" class="d-none d-sm-flex" width="300">
                                </div>
                            </div>

                            <div class="section section-yogas pt-6">
                                <div class="container">
                                    <div class="row">

                                        <div class="col-md-6 col-lg-4">
                                            <div class="card" style="border-top-color: #9DC3E2;">
                                                <div class="card-body">
                                                    <h3>Sekilas Kabupaten Boalemo.</h3>
                                                    <p class="text-black-50">Kabupaten Boalemo dengan ibukota Tilamuta merupakan kabupaten hasil pemekaran Kabupaten Gorontalo pada tahun 1999. Meski belum genap...</p>
                                                </div>
                                            </div>
                                            <div class="card topmargin" style="border-top-color: #FFB5CC;">
                                                <div class="card-body">
                                                    <h3>Profil Dinas Perikanan dan Kelautan.</h3>
                                                    <p class="text-black-50">Organisasi Perangkat Daerah Dinas sesuai dengan Peraturan Bupati Nomor : 05 Tahun 2016 Tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi dan Tata Kerja...</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4" style="margin-top: 30px">
                                            <div class="card" style="border-top-color: #F4ABEF;">
                                                <div class="card-body">
                                                    <h3>Potensi Wilayah.</h3>
                                                    <p class="text-black-50">Organisasi Perangkat Daerah Dinas sesuai dengan Peraturan Bupati Nomor : 05 Tahun 2016 Tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi dan Tata Kerja Dinas Perikanan dan Kelautan...</p>
                                                </div>
                                            </div>
                                            <div class="card topmargin" style="border-top-color: #F2A490;">
                                                <div class="card-body">
                                                    <h3>Tugas Pokok & Fungsi.</h3>
                                                    <p class="text-black-50">Organisasi Perangkat Daerah Dinas sesuai dengan Peraturan Bupati Nomor : 05 Tahun 2016 Tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi dan Tata Kerja Dinas Perikanan dan Kelautan...</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4" style="margin-top: 60px">
                                            <div class="card" style="border-top-color: #9DD2D8;">
                                                <div class="card-body">
                                                    <h3>Visi Misi Daerah.</h3>
                                                    <p class="text-black-50">Visi pemerintah daerah untuk periode RPJMD 2017 - 2022 adalah: <br> “KABUPATEN YANG DAMAI, CERDAS, SEJAHTERA DALAM SUASANA YANG RELIGIUS TAHUN 2022”</p>
                                                </div>
                                            </div>
                                            <div class="card topmargin" style="border-top-color: #D0E6A5;">
                                                <div class="card-body">
                                                    <h3>Sarana Penunjang Kegiatan Produksi</h3>
                                                    <p class="text-black-50">Organisasi Perangkat Daerah Dinas sesuai dengan Peraturan Bupati Nomor : 05 Tahun 2016 Tentang Kedudukan, Susunan Organisasi, Tugas, Fungsi dan Tata Kerja...</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    
                    <div class="section bg-transparent my-0 pt-0">
                        <div class="container">
                            <div class="heading-block" style="max-width: 500px">
                                <h3 class="fw-bold nott mb-2" style="font-size: 42px; letter-spacing: -1px;">Berita <span>Terkini</span></h3>
                                <p>Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                            </div>
                        </div>

                        <div id="oc-teachers" class="owl-carousel owl-carousel-full image-carousel carousel-widget customjs">

                            <div v-if="posts.length > 0" class="oc-item">
                                <div v-for="post in posts" :key="post.id"
                                class="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column"
                                style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('post.image') no-repeat center center / cover;">
                                    <div class="jumbotron-text mt-0 mt-md-auto row align-items-center">
                                        <div class="col-md-12">
                                            <div class="testimonial bg-transparent shadow-none border-0 p-0">
                                                <h3 class="mb-1">
                                                    <router-link :to="{name: 'detail_post', params: {slug: post.slug}}" class="text-dark text-decoration-none">
                                                        {{ post.title }}
                                                    </router-link>
                                                </h3>
                                                <div class="testi-meta ls1 mb-4 text-light fw-normal"> Berita Daerah</div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> {{ post.created_at }}</li>
                                                        <li><a href="#"><i class="icon-eye"></i> 13 kali dilihat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else>
                                <div class="row">
                                    <div class="col-md-4 mb-3" v-for="loader in posts_loader" :key="loader">
                                        <div class="card border-0 shadow-sm rounded-lg">
                                            <div class="card-body">
                                                <FacebookLoader />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end berita section -->

                            <!--<div class="oc-item">
                                <div class="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('/assets/images/tes.jpg') no-repeat center center / cover;">
                                    <div class="jumbotron-text mt-0 mt-md-auto row align-items-center">
                                        <div class="col-md-12">
                                            <div class="testimonial bg-transparent shadow-none border-0 p-0">
                                                <h3 class="mb-1">Bupati Anas Jusuf Tandatangani Naskah Kerja Sama dengan Unisa Palu</h3>
                                                <div class="testi-meta ls1 mb-4 text-light fw-normal"> Berita Daerah</div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 14 Juni 2022</li>
                                                        <li><a href="#"><i class="icon-eye"></i> 13 kali dilihat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="oc-item">
                                <div class="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('/assets/images/tes.jpg') no-repeat center center / cover;">
                                    <div class="jumbotron-text mt-0 mt-md-auto row align-items-center">
                                        <div class="col-md-12">
                                            <div class="testimonial bg-transparent shadow-none border-0 p-0">
                                                <h3 class="mb-1">Bupati Anas Jusuf Tandatangani Naskah Kerja Sama dengan Unisa Palu</h3>
                                                <div class="testi-meta ls1 mb-4 text-light fw-normal"> Berita Daerah</div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 14 Juni 2022</li>
                                                        <li><a href="#"><i class="icon-eye"></i> 13 kali dilihat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="oc-item">
                                <div class="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('/assets/images/tes.jpg') no-repeat center center / cover;">
                                    <div class="jumbotron-text mt-0 mt-md-auto row align-items-center">
                                        <div class="col-md-12">
                                            <div class="testimonial bg-transparent shadow-none border-0 p-0">
                                                <h3 class="mb-1">Bupati Anas Jusuf Tandatangani Naskah Kerja Sama dengan Unisa Palu</h3>
                                                <div class="testi-meta ls1 mb-4 text-light fw-normal"> Berita Daerah</div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 14 Juni 2022</li>
                                                        <li><a href="#"><i class="icon-eye"></i> 13 kali dilihat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="oc-item">
                                <div class="jumbotron m-0 dark p-5 d-flex justify-content-center align-items-md-end flex-column" style="background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0, 0.8)), url('/assets/images/tes.jpg') no-repeat center center / cover;">
                                    <div class="jumbotron-text mt-0 mt-md-auto row align-items-center">
                                        <div class="col-md-12">
                                            <div class="testimonial bg-transparent shadow-none border-0 p-0">
                                                <h3 class="mb-1">Bupati Anas Jusuf Tandatangani Naskah Kerja Sama dengan Unisa Palu</h3>
                                                <div class="testi-meta ls1 mb-4 text-light fw-normal"> Berita Daerah</div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 14 Juni 2022</li>
                                                        <li><a href="#"><i class="icon-eye"></i> 13 kali dilihat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->

                        </div>

                    </div>


                    <div class="section pt-0 mb-0 bg-transparent">
                        <div class="container">

                            <div class="row col-mb-50">

                                <div class="col-lg-8">
                                    <div class="fancy-title title-border">
                                        <h3 class="fw-bold ls1 nott mb-2" style="font-size: 32px; letter-spacing: -1px;">Galeri <span>Kegiatan</span></h3>
                                    </div>

                                    <div class="row posts-md col-mb-30">
                                        <div class="entry col-md-6">
                                            <div class="grid-inner">
                                                <div class="entry-image">
                                                    <a href="#"><img src="/assets/images/foto-1.jpg" width="400" height="300" alt="Image"></a>
                                                </div>
                                                <div class="entry-title title-sm nott">
                                                    <h3><a href="">Ucapan peringatan Hari Bhakti Adhyaksa ke-60 Tahun 2020 DKP Kabupaten Boalemo</a></h3>
                                                </div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 22 Juli 2021</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="entry col-md-6">
                                            <div class="grid-inner">
                                                <div class="entry-image">
                                                    <a href="#"><img src="/assets/images/foto-2.jpg" width="400" height="300" alt="Image"></a>
                                                </div>
                                                <div class="entry-title title-sm nott">
                                                    <h3><a href="">Ucapan peringatan Hari Bhakti Adhyaksa ke-60 Tahun 2020 DKP Kabupaten Boalemo</a></h3>
                                                </div>
                                                <div class="entry-meta">
                                                    <ul>
                                                        <li><i class="icon-calendar3"></i> 22 Juli 2021</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="fancy-title title-border">
                                        <h3 class="fw-bold ls1 nott mb-2" style="font-size: 32px; letter-spacing: -1px;">Kepegawain</h3>
                                    </div>
                                    <div class="fslider testimonial testimonial-full" data-animation="slide" data-arrows="false">
                                        <div class="flexslider">
                                            <div class="slider-wrap">
                                                <div class="slide">
                                                    <div class="testi-image">
                                                        <a href="#"><img src="/assets/images/kepegawaian/ASRA-UMAR-MURAD.jpg" alt="Dinas Kelautan dan Perikanan Kabupaten Boalemo"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <p>Kepala Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                                                        <div class="testi-meta">
                                                            Ir. ASRA UMAR MURAD
                                                            <span>Kepala Dinas.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-image">
                                                        <a href="#"><img src="/assets/images/kepegawaian/SUGIONO.jpg" alt="Dinas Kelautan dan Perikanan Kabupaten Boalemo"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <p>Sekretaris Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                                                        <div class="testi-meta">
                                                            SUGIONO, S.ST.Pi
                                                            <span>Sekretaris Dinas.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-image">
                                                        <a href="#"><img src="/assets/images/kepegawaian/FANNY-JOUDY MORAY.jpg" alt="Dinas Kelautan dan Perikanan Kabupaten Boalemo"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <p>Kepala Bidang Perikanan Tangkap Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                                                        <div class="testi-meta">
                                                            FANNY JOUDY MORAY, S.Pi
                                                            <span>Kepala Bidang.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-image">
                                                        <a href="#"><img src="/assets/images/kepegawaian/ARDIYANSAH-RAUF.jpg" alt="Dinas Kelautan dan Perikanan Kabupaten Boalemo"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <p>Kepala Bidang Perikanan Budidaya Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                                                        <div class="testi-meta">
                                                            ARDIYANSAH RAUF, S.Pi
                                                            <span>Kepala Bidang.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="slide">
                                                    <div class="testi-image">
                                                        <a href="#"><img src="/assets/images/kepegawaian/RAMSI-BOKINGS.jpg" alt="Dinas Kelautan dan Perikanan Kabupaten Boalemo"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <p>Kepala Bidang Bina Mutu Dinas Kelautan dan Perikanan Kabupaten Boalemo</p>
                                                        <div class="testi-meta">
                                                            RAMSI BOKINGS, SHi
                                                            <span>Kepala Bidang.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </section><!-- #content end -->

            <!-- footer -->
            <Footer />
            <!-- end slider -->

        </div>
    </div>

</template>

<script>

    //import content loader
    import {
        FacebookLoader
    } from 'vue-content-loader';

    //import axios
    import axios from 'axios';

    //import hook onMounted from vue
    import { ref, onMounted } from 'vue';

    //import component
    import Header from "@/components/Header";
    import Slider from "@/components/Slider";
    import Footer from "@/components/Footer";

    export default {
        name: 'HomeComponent',

        components: {
            //loader component
            FacebookLoader,
            //component app
            Header,
            Slider,
            Footer
        },
        
        setup() {

            //define state
            const posts = ref([]);
            const posts_loader = ref(3);

            //hook onMounted
            onMounted(() => {
                //get posts
                axios.get('/api/homepage/post')
                    .then(response => {
                        posts.value = response.data.data;
                    })
                    
            });

            //return state
            return {
                posts,
                posts_loader
            }
        }
    }
</script>
