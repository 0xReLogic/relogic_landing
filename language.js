// Language Data for ReLogic Contact Tool
window.languageData = {
    id: {
        nav: {
            home: "Beranda",
            features: "Fitur",
            testimonials: "Testimoni",
            contact: "Kontak"
        },
        hero: {
            title1: "Sederhanakan",
            title2: "Komunikasi",
            title3: "Anda dengan ReLogic Contact Tool",
            description: "Streamline manajemen kontak dan alur kerja komunikasi Anda dengan tool kontak cerdas kami. Terhubung, kelola, dan berinteraksi seperti tidak pernah ada sebelumnya.",
            cta: "Mulai di Telegram",
            learnMore: "Pelajari Lebih Lanjut"
        },
        features: {
            title: "Fitur Powerful",
            subtitle: "Semua yang Anda butuhkan untuk mengelola kontak secara efektif",
            feature1: {
                title: "Manajemen Kontak Cerdas",
                description: "Kelola dan kategorikan kontak Anda dengan penandaan cerdas dan kemampuan pencarian."
            },
            feature2: {
                title: "Super Cepat",
                description: "Akses kontak Anda secara instan dengan sistem pencarian dan pengambilan yang dioptimalkan."
            },
            feature3: {
                title: "Aman & Privat",
                description: "Data kontak Anda dienkripsi dan dilindungi dengan keamanan tingkat enterprise."
            },
            feature4: {
                title: "Sinkronisasi Real-time",
                description: "Jaga kontak Anda tetap tersinkronisasi di semua perangkat secara otomatis."
            },
            feature5: {
                title: "Dashboard Analitik",
                description: "Dapatkan wawasan tentang pola komunikasi dan keterlibatan kontak Anda."
            },
            feature6: {
                title: "Dioptimalkan untuk Mobile",
                description: "Pengalaman sempurna di perangkat apa pun - desktop, tablet, atau mobile."
            }
        },
        testimonials: {
            title: "Apa Kata Pengguna Kami",
            subtitle: "Bergabunglah dengan ribuan pengguna puas di seluruh dunia",
            testimonial1: {
                content: "ReLogic telah sepenuhnya mengubah cara saya mengelola kontak bisnis. Integrasi Telegram sangat mulus!",
                name: "Sarah Johnson",
                role: "Direktur Marketing"
            },
            testimonial2: {
                content: "Fitur analitik membantu saya memahami pola networking saya. Sangat direkomendasikan untuk profesional!",
                name: "Michael Chen",
                role: "Sales Manager"
            },
            testimonial3: {
                content: "Sederhana, cepat, dan aman. ReLogic Contact Tool adalah persis yang saya butuhkan untuk bisnis yang berkembang.",
                name: "Emily Rodriguez",
                role: "Entrepreneur"
            }
        },
        cta: {
            title: "Siap untuk Memulai?",
            description: "Bergabunglah dengan ribuan pengguna yang telah menyederhanakan manajemen kontak mereka dengan ReLogic",
            button: "Mulai Menggunakan ReLogic di Telegram",
            feature1: "Gratis untuk memulai",
            feature2: "Tidak perlu kartu kredit",
            feature3: "Setup dalam hitungan menit"
        }
    },
    en: {
        nav: {
            home: "Home",
            features: "Features",
            testimonials: "Testimonials",
            contact: "Contact"
        },
        hero: {
            title1: "Simplify Your",
            title2: "Communication",
            title3: "with ReLogic Contact Tool",
            description: "Streamline your contact management and communication workflow with our intelligent contact tool. Connect, organize, and engage like never before.",
            cta: "Get Started on Telegram",
            learnMore: "Learn More"
        },
        features: {
            title: "Powerful Features",
            subtitle: "Everything you need to manage your contacts effectively",
            feature1: {
                title: "Smart Contact Management",
                description: "Organize and categorize your contacts with intelligent tagging and search capabilities."
            },
            feature2: {
                title: "Lightning Fast",
                description: "Access your contacts instantly with our optimized search and retrieval system."
            },
            feature3: {
                title: "Secure & Private",
                description: "Your contact data is encrypted and protected with enterprise-grade security."
            },
            feature4: {
                title: "Real-time Sync",
                description: "Keep your contacts synchronized across all your devices automatically."
            },
            feature5: {
                title: "Analytics Dashboard",
                description: "Get insights into your communication patterns and contact engagement."
            },
            feature6: {
                title: "Mobile Optimized",
                description: "Perfect experience on any device - desktop, tablet, or mobile."
            }
        },
        testimonials: {
            title: "What Our Users Say",
            subtitle: "Join thousands of satisfied users worldwide",
            testimonial1: {
                content: "ReLogic has completely transformed how I manage my business contacts. The Telegram integration is seamless!",
                name: "Sarah Johnson",
                role: "Marketing Director"
            },
            testimonial2: {
                content: "The analytics feature helped me understand my networking patterns. Highly recommended for professionals!",
                name: "Michael Chen",
                role: "Sales Manager"
            },
            testimonial3: {
                content: "Simple, fast, and secure. ReLogic Contact Tool is exactly what I needed for my growing business.",
                name: "Emily Rodriguez",
                role: "Entrepreneur"
            }
        },
        cta: {
            title: "Ready to Get Started?",
            description: "Join thousands of users who have simplified their contact management with ReLogic",
            button: "Start Using ReLogic on Telegram",
            feature1: "Free to start",
            feature2: "No credit card required",
            feature3: "Setup in minutes"
        }
    }
};

// Initialize with default language
document.addEventListener('DOMContentLoaded', () => {
    // Set default language to Indonesian
    const defaultLang = localStorage.getItem('language') || 'id';
    document.documentElement.lang = defaultLang;
    
    console.log('Language data loaded successfully!');
});
