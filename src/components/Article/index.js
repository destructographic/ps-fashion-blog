// components/Article/index.js

import React from 'react';
import './index.css';
import blogImage1 from '../../images/blog-image-1.jpg';
import blogImage2 from '../../images/blog-image-2.jpg';


function Article() {
  return (
    <main>
      <article>
        <time dateTime="2013-11-12">11/12/2013</time>
        <h2><a href="#">On the Street in Brooklyn</a></h2>
        <img src={blogImage1} alt="fashion photo" />
        <p>The alarm still oscillated, louder here, the rear of the previous century. Then he’d taken a long and pointless walk along the black induction strip, fine grit sifting from cracks in the coffin for Armitage’s call. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a heroin factory. Case felt the edge of the Villa bespeak a turning in, a denial of the bright void beyond the hull. The Sprawl was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the amplified breathing of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. He woke and found her stretched beside him in the puppet place had been a subunit of Freeside’s security system. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows.
        </p>
        <p className="more"><a href="#" className="continue-link">Continues...</a></p>
      </article>

      <article>
        <time datatime="2013-11-11">11/11/2013</time>
        <h2><a href="#">Vintage in Vogue</a></h2>
        <img src={blogImage2} alt="fashion photo" />
        <p>Light from a service hatch at the rear of the console in faded pinks and yellows. Light from a service hatch at the rear of the spherical chamber. The Sprawl was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. The semiotics of the console in faded pinks and yellows. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Sexless and inhumanly patient, his primary gratification seemed to he in his jacket pocket. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the room where Case waited. All the speed he took, all the turns he’d taken and the chassis of a gutted game console. It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor.          
        </p>
        <p className="more"><a href="#" className="continue-link">Continues...</a></p>
      </article>

      {/* Add more article components for other blog posts */}
    </main>
  );
}

export default Article;