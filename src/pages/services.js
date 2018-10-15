import React, { Fragment } from 'react';
import Layout from '../components/layout';
import styles from './styles/services.module.css';
import confirmation_icon from '../pages/icons/icon-confirmation.svg';

const Services = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    {location.hash !== "#success" && <Fragment>
                    <h1>Query</h1>
                    <form name="services" action="/services/#success" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="services" />
                        <div className={styles.form_entry}>
                            <label htmlFor="query">I would like to know more</label>
                            <textarea id="query" name="query"></textarea>
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="name">Full name</label>
                            <input id="name" name="name" type="text" defaultValue="My name is " />
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="email">Email address</label>
                            <input id="email" name="email" type="email" />
                        </div>
                        <div className={styles.form_entry}>
                            <label htmlFor="phoneSkype">Phone number or Skype ID (optional)</label>
                            <input id="phoneSkype" name="phoneSkype" type="text" />
                        </div>
                        <div className={styles.form_actions}>
                            <input className={`button ${styles.form_send}`} type="submit" value="Send Query" />
                        </div>
                    </form>
                    </Fragment>}
                    {location.hash === "#success" && <Fragment>
                        <h1>Thank you for reaching out!</h1>
                        <h3>We received your request.</h3>
                        <p className={styles.successIcon}><img src={confirmation_icon} alt="Opened envelope with letter and a checkmark" /></p>
                        <p>Someone of our colleagues is going to look into it.</p>
                        <p>Feel free to ask any additional questions via <a href="mailto:hello@globiez.com">hello@globiez.com</a>.</p>
                    </Fragment>}
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <h1>Services</h1>
                    <div className="row row-nested">
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>IT  recruitment </h2>
                            <p>In  this  tense  IT  job  market,  we  like  to  do  things  a  little  bit  differently.  We  ͞hand  pick͟  our  candidates.  
                                We  don’t  use  a  database,  just  our  extensive  network. </p>
                            <p>We  focus  on  International  talent,  primarily  Europe  and  EU  citizens.  But  we  also  have  access  to  the  
                                huge  Asian  IT  talent  pool.  We  like  to  think  outside  the  comfort  area. </p>
                            <p>Although  we  can  recruit  candidates  for  any  type  of  organization,  we  are  pros  when  it  comes  to  
                                start-ups  (ICO-,  STO  projects)  and  scale-ups. </p>
                            <h2>IT  contracting  </h2>
                            <p>Contracting  in  IT  is  a  different  ball  game.  We  work  with  freelancers  and  IT  professionals  that  want  
                                to  work  on  different  projects  and  work  with  the  latest  technologies.  Globiez  can  connect  international  
                                IT  talent  and  companies  for  temporary  projects,  long  or  short  term.  We  help  our  contractors  to  find  
                                the  perfect  IT  Contract  job,  at  the  best  rate,  in  the  ideal  location.  There  are  always  new  challenges  
                                for  experienced  independent  professionals  in  our  network. </p>
                            <h2>Remote  development  teams </h2>
                            <p>Sometimes  a  project  is  so  big,  hiring  one  person  will  not  do  the  job.  In  that  case  Globiez  can  offer    
                                remote  teams.  We  work  closely  with  teams  in  Romania,  Poland,  Croatia,  Estonia  and  Ukraine.  All  of  the  
                                teams,  no  matter  where  located,  have  to  work  according  to  the  following  principles:  </p>
                            <ul>
                                <li>Understanding  the  business  models  and  needs  of  our  clients  </li>
                                <li>In  any  project  the  key  factor  is  communication  </li>
                                <li>Talk  simple  and  think  in  perspective </li>
                            </ul>
                            <p>All  the  teams  have  extensive  experience  in  remote  developing  and  can  deliver  references  from  existing  
                                and  previous  clients/  projects. </p>
                        </div>
                        <div className="col col-4-of-12 col-4-of-8">
                            <h2>Setting  up  your  hiring  road  map </h2>
                            <p>In  start-ups  and  scale  ups  we  often  encounter  ad-hoc  hiring.  We  can  assist  our  clients,  big  and
                                small,  in  setting  up  a  hiring  road  map.  That  means  we  will  listen  to  the  plans,  opportunities  and
                                wishes  of  the  client  and  translate  that  into  a  hiring  road  map.  This  road  map  will  set  out  in  time
                                what  skills  are  needed,  when  they  are  needed  and  for  how  long.  </p>
                            <p>A  strong  plan  can  save  you  a  lot  of  time  and  money. </p>
                            <h2>Writing  vacancies </h2>
                            <p>The  first  contact  any  candidates  will  have  with  a  new  potential  employer  or  customer  will  be  a  job
                                add  or  job  description.  So  from  our  perspective,  we  think  it’s  smart  to  draft  and  publish  a  clear,
                                transparent  and  attractive  job  description. </p>
                            <p>Globiez  can  assist  its  clients  with  writing  smart  and  interesting  content  about  the  job  and  the  company,
                                to  attract  the  best  talent.  </p>
                            <h2>Relocation</h2>
                            <p>After  hiring  an  international  IT  professional  clients  and/  or  candidates  sometimes  need  assistance  with
                                the  relocation  to  the  Netherlands.  Therefor  Globiez  offers  support  regarding  visa  application,  housing
                                and  setting  up  in  the  Netherlands.  Think  about  applying  for  health  insurance,  30%  tax  ruling,  opening
                                a  bank  account,  utilities  etc. </p>
                            <p>And  our  candidates  are  always  welcome  for  a  Friday  afternoon  beer  and  a  ͞bitterbal͟  to  catch  up  with  other  candidates
                                and  the  Globiez  team  and  exchange  experiences.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services;