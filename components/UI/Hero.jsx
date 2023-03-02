import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Moh. Aufa Azka Fabian</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              Membangun website dan aplikasi mobile yang menarik dan mudah digunakan dapat membantu bisnis Anda tumbuh dengan pesat. Kami menawarkan jasa desain website dan aplikasi mobile profesional yang menarik perhatian pelanggan dan mudah digunakan. Dengan pengalaman dan keahlian kami, kami dapat membuat website dan aplikasi mobile yang sesuai dengan kebutuhan dan preferensi Anda. Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan mulailah membangun hadir online Anda yang menarik dan efektif!
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#about">About me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/18T0M80GQyUthsI5KfFPfh5OJK0L39_Mo/view?usp=share_link">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
