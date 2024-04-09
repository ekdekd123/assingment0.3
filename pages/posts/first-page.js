import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>Hello! My name is Yubin Park, and I'm currently a junior in the Department of Information Systems at Hanyang University.
                This year, I transferred from the Department of Interior Architecture Design to the Department of Information Systems, 
                embarking on my first semester in this new field.
                I'm excited and motivated to learn in this new discipline, dedicating myself to my studies.
                Recently, my interest has been in baseball.
                Specifically, I am a fan of the Kia Tigers and am hopeful that they will win the championship this year.
                Watching baseball games helps me relieve stress and learn about the importance of teamwork and strategic thinking.
                Through my new major and interest in baseball, I aim to accumulate diverse experiences and develop a unique perspective. 
                Moving forward, I wish to explore new knowledge and experience a broader world through interactions with various people. 
                Thank you!</h2> 
                <div>
                    <img src="/picture.jpg" alt="One day in winter in 2023"/>
                    <img src="/kia.JPG" alt="The mascot of the Kia Tigers, Hogeul"/>
                </div>
            <Link href="/">Back to home</Link> 
        </div>
    )
}