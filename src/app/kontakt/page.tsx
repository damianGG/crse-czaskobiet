import Link from "next/link";
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Kontakt do projektu „Kobieta * Aktywność * Sukces',
    description: 'Kontakt do projektu „Kobieta * Aktywność * Sukces” w Radomiu i gminie Wieniawa oraz do biura projektu J&P Moritz Consulting Group Sp. z o. o. w Wrocławiu',
}
export default function Kontakt() {
    return (
        <>
            <section
                className="wrapper"
                style={{
                    position: 'relative',
                    backgroundPosition: 'right',
                    backgroundImage: 'url(/_next/static/media/flaga-ue-tlo.a9057970.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div
                    className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div
                    className="container pt-5 pb-5 pt-md-10 pb-md-10 text-center"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <h1 className="display-1 mb-3" style={{ color: 'white' }}>
                                Kontakt
                            </h1>
                            <p className="lead px-xxl-10"></p>
                        </div>
                    </div>
                </div>
            </section>

            <title>Biuro Projektu</title>

            <div className="container mt-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Biuro Projektu</h1>
                        <p><strong>Adres:</strong> Plac Niepodległości 1 lok. 3.19, 25-506 Kielce</p>
                        <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 - 16:00 (istnieje możliwość umówienia się na inne godziny spotkania)</p>
                        <p><strong>Tel:</strong> +48 887 788 062</p>
                        <p><strong>E-mail:</strong> <a href="mailto:czaskobiet@crse.org.pl" className="link-primary" target="_blank">czaskobiet@crse.org.pl</a> </p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8468.299281562113!2d20.609483733014006!3d50.87485599236021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471827ef3ba09413%3A0x173b479902984349!2splac%20Niepodleg%C5%82o%C5%9Bci%201%2C%2025-001%20Kielce!5e0!3m2!1spl!2spl!4v1728038530209!5m2!1spl!2spl"

                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Siedziba Centrum Rozwoju Społeczno-Ekonomicznego - Lider</h2>
                        <p><strong>Adres: </strong> Sielec 1A, 39-120 Sędziszów Małopolski</p>
                        <p><strong>Strona: </strong><Link href="https://crse.org.pl" className="link-primary" target="_blank">www.crse.org.pl</Link></p>
                        <p><strong>Tel: </strong> 17 22 21 575</p>
                        <p><strong>E-mail: </strong><a href="mailto:sekretariat@crse.org.pl" className="link-primary" target="_blank">sekretariat@crse.org.pl</a> </p>
                    </div>

                </div>
                <div className="row mt-10">
                    <div className="col text-center">
                        <h2>Siedziba Fundacja EFEKT MOTYLA - Partner</h2>
                        <p><strong>Adres: </strong> Plac Niepodległości 1 lok. 3.19, 25-506 Kielce</p>
                        <p><strong>Strona: </strong><Link href="https://fundacjaefektmotyla.pl" className="link-primary" target="_blank">www.fundacjaefektmotyla.pl</Link></p>
                        <p><strong>Tel: </strong> +48 48 533 535 008</p>
                        <p><strong>E-mail: </strong><a href="mailto:biuro@fundacjaefektmotyla.pl" className="link-primary" target="_blank">biuro@fundacjaefektmotyla.pl</a> </p>
                    </div>

                </div>
                <div className="row">
                    <div className="col text-center mb-15">
                        <Link
                            href="https://www.facebook.com/search/top/?q=%23funduszeue%20%23FunduszeEuropejskie"
                            className="link-primary" target="_blank"
                        >
                            #FunduszeUE #FunduszeEuropejskie
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

