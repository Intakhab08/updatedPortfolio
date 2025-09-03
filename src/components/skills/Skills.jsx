import React from 'react';
import './Skills.css';
import Image1 from '../../assets/skills-1.png'
import Image2 from '../../assets/skills-2.svg'
import Image3 from '../../assets/skills-3.svg'
import Image4 from '../../assets/skills-4.webp'
import Image5 from '../../assets/service-2.svg'
import Image6 from '../../assets/skills-5.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Languages & Frameworks",
        description:
            "Java, JavaScript, Spring Boot, Spring Data JPA, React, HTML, CSS, JUnit, JWT",
    },
    {
        id: 2,
        image: Image2,
        title: "Tools",
        description:
            "JDBC, Hibernate, Git, Maven, Gradle, Postman, Swagger",
    },
    {
        id: 3,
        image: Image3,
        title: "Databases",
        description:
            "MySQL, SQL, PostgreSQL, NoSQL",
    },
    {
        id: 4,
        image: Image4,
        title: "IDEs",
        description:
            "IntelliJ IDEA, Eclipse, Visual Studio Code",
    },
    {
        id: 5,
        image: Image5,
        title: "Concepts",
        description:
            "OOPs, Data Structures and Algorithms, REST APIs",
    },
    {
        id: 6,
        image: Image6,
        title: "Other Skills",
        description:
            "Agile, Microservices, Unit & Integration Testing, Performance Optimization",
    },
];

const Skills = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Technical Skills</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;
