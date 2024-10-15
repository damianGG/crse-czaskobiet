import Image from "next/image";
import Link from "next/link";




export default function Footer2() {
  return (
    <footer className="bg-soft-primary">
      <div className="container">
        {/* <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
          <ContactMap />
        </div> */}
      </div>

      <div className="container pb-12 text-center pt-10">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">


              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold"><i className="uil uil-map me-2 fs-25" ></i> Adres (Biuro projektu)</p>
                  <address>
                    Plac Niepodległości 1 lok. 3.19,<br className="d-none d-md-block" />25-506 Kielce
                  </address>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold"><i className="uil uil-phone-alt me-2 fs-25"></i>Telefon</p>
                  <p>
                    +48 887 788 062 <br />
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold"><i className="uil uil-envelope fs-25 me-2 "></i> e-mail</p>

                  <Link href="mailto:czaskobiet@crse.org.pl" className="link-primary">
                    czaskobiet@crse.org.pl
                  </Link>
                  <br className="d-none d-md-block" />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="widget">
                  <p className="widget-title fs-15 fw-bold">
                    <i className="uil uil-facebook-f fs-25" /> facebook</p>




                  <Link href="https://www.facebook.com/profile.php?id=61566028093204" className="link-primary" target="_blank">Czas Kobiet </Link>

                </div>
              </div>
            </div>

            <p>Biuro projektu czynne jest od poniedziałku do piątku w godzinach 8:00 – 16:00

              (istnieje możliwość umówienia się na inne godziny spotkania)</p>

          </div>
        </div>
        <p className="fs-15">Centrum Rozwoju Społeczno-Ekonomicznego rights reserved.</p>
      </div>
    </footer>
  );
}
