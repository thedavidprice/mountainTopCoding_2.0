import { Link, routes } from '@redwoodjs/router'
import Logo from './mtntpcdng_lg.svg'

import Footer from '../src/components/Footer'

const HomePage = () => {
  return (
    <div>
      <div className="mx-6 my-6">
        <Logo />
      </div>

      <div className="">
        <h1 className="font-semibold text-5xl w-1/2 justify-center mx-auto">
          Hello, I am <span className="text-blue-500">Isaac Tait</span>. I am a
          Jamstack web developer.
        </h1>
      </div>

      <div className="heropattern-topography-blue-500">
        <p>
          Check out the original{' '}
          <code>
            mountainTopCoding(
            <span role="img" aria-label="mountain with snow-cap">
              &#127956;
            </span>
            );
          </code>
          <a
            href="https://mountaintopcoding.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            here
          </a>
          .
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          bibendum, arcu nec pharetra condimentum, felis ex aliquam eros, sed
          feugiat ligula tortor non mi. Maecenas id risus quis est venenatis
          congue sit amet sed dolor. Aenean eleifend euismod orci in porta. Sed
          sit amet sollicitudin tortor. Mauris venenatis volutpat mauris et
          consequat. In eu sapien sagittis, pretium nibh et, dignissim orci.
          Fusce lacinia urna ipsum, luctus ornare quam aliquet a. Duis ut
          bibendum lorem, vitae consequat neque. Ut mattis nulla ligula, ut
          finibus sem pellentesque id. Integer congue in nulla quis placerat.
          Nullam auctor quam eu turpis commodo, eu blandit nisl lacinia. Etiam
          vel nisl purus. In hac habitasse platea dictumst. Nam eleifend maximus
          laoreet. Duis nec turpis nulla.
        </p>
        <p>
          Nullam vestibulum porttitor ex eu finibus. Donec nec malesuada felis,
          et luctus orci. Pellentesque pharetra urna vel diam venenatis
          interdum. Proin magna metus, tincidunt et molestie a, convallis ut
          ante. Proin blandit gravida massa vel pellentesque. Donec ac pulvinar
          ipsum, non dignissim odio. Vestibulum sit amet volutpat lectus, ut
          lacinia libero. Integer id lobortis urna, porttitor tempor lacus.
          Integer ut viverra nisi, at rutrum nisl. Etiam facilisis, nibh sed
          malesuada interdum, est ex elementum dui, quis vehicula tortor diam in
          enim. Vivamus placerat lacus elementum tortor viverra, nec ullamcorper
          mauris cursus. Quisque lacinia, nibh et tempor congue, nisi massa
          elementum mauris, non congue mauris elit eget risus. Aliquam velit
          lectus, egestas non congue fringilla, eleifend id dui. Phasellus sed
          consectetur metus, in pulvinar dui. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Nulla facilisi.
        </p>
        <p>
          Curabitur pulvinar lorem tempor odio convallis, et gravida nisi
          fermentum. Duis turpis magna, imperdiet in facilisis id, euismod id
          nunc. Duis non aliquam arcu. Sed in scelerisque eros. Proin vitae
          purus ac lorem luctus rutrum feugiat volutpat diam. Praesent suscipit
          odio et nisi consectetur dictum. Vivamus ut tempus quam.
        </p>
        <p>
          Nam fringilla lacus venenatis odio tristique luctus. Cras cursus
          finibus dolor, vitae sodales erat hendrerit sed. Vivamus leo orci,
          bibendum eget nibh vel, aliquet volutpat purus. Donec tempor elit sed
          dignissim posuere. Vestibulum facilisis neque imperdiet, fringilla
          urna eu, rhoncus tortor. Integer euismod rhoncus quam in pellentesque.
          Aliquam id egestas massa, vel fringilla ligula. Fusce luctus, libero
          sit amet rhoncus congue, sem leo placerat massa, at tristique sapien
          diam at nunc. Phasellus porta efficitur diam, nec scelerisque ipsum.
          Sed dolor nibh, congue ac eros sed, vestibulum ultricies felis. Cras
          molestie dui at feugiat varius. Aliquam erat volutpat.
        </p>
        <p>
          Morbi metus turpis, sollicitudin sit amet volutpat hendrerit,
          facilisis nec ligula. Nulla quis egestas sapien. Aenean nec euismod
          urna. Curabitur bibendum ipsum nec urna dictum, in condimentum lectus
          semper. Curabitur mattis neque magna. Cras at nisi et turpis dignissim
          lacinia. Morbi sollicitudin justo ut justo laoreet, ac mollis tellus
          ultrices.{' '}
        </p>
      </div>
      <>
        <p>This is ultra basic for now, more to come soon.</p>
        <p>
          Here is a link to `<Link to={routes.home()}>Home</Link>`, which you
          are already at so it will appear not to work...
        </p>
      </>
      <Footer />
    </div>
  )
}

export default HomePage
