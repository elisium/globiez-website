import React, { Fragment } from 'react';
import Layout from '../components/layout';
import TelegramButton from '../components/shared/telegramButton';
import QAItem from '../components/qa-item/qa-item';

import styles from './styles/qa.module.css';

const QAPage = ({ data, location }) => {

    return (
        <Layout>
            <div className="row">
                <aside className="left-panel col col-4-of-12 col-4-of-8">
                    <h1>Community</h1>
                    <p>We are those who already been through the process of finding a job in the Netherlands and who is seeking some advice.
                         Feel free to reach us out!</p>
                    <p className={styles.facebook}><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></p>
                    <p>Our group on Telegram keeps growing.</p>
                    <p><TelegramButton /></p>
                </aside>
                <div className="right-panel col col-8-of-12 col-4-of-8">
                    <h1>Q&A</h1>
                    <div className="row row-nested">
                      <div className="col col-4-of-12 col-4-of-8">
                        <h2>Hiring process</h2>
                        <QAItem
                          height={450}
                          q="What is hiring process like?"
                          a={<Fragment>
                            <p>The  hiring  process  is  totally  depending  on  the  client,  but  on  average  this  is  how  it  looks  like: </p>
                            <ul>
                              <li>First  contact  with  head  hunter  </li>
                              <li>CV  review  </li>
                              <li>Interview  with  Consultant  from  Globiez  </li>
                              <li>First  interview  with  client  </li>
                              <li>Second  interview  with  client  </li>
                              <li>Salary  negotiations  and  contract  signing  </li>
                              <li>Start  new  job </li>
                            </ul>
                            <p>How  long  or  short  the  total  process  will  take  is  depending  on  the  client.  We  always  make 
                              our  clients  aware  our  top  talents  in  the  market  are  only  available  for  a  short  period  of  time 
                              and  appropriate  speed  and  effort  should  be  put  in  to  the  process  to  get  them  on  board.   </p>
                            </Fragment>}
                          open
                        />
                      </div>
                      <div className="col col-4-of-12 col-4-of-8">
                        <h2>Relocation</h2>
                        <QAItem
                          height={1140}
                          q="Who  can  work  in  the  Netherlands  freely  without  a  visa?"
                          a={<Fragment>
                            <p>If  you  are  a  national  of  a  country  that  is  part  of  the  European  Union  (EU),  the  European  
                              Economic  Area  or  Switzerland,  you  are  legally  entitled  to  stay,  work  and  look  for  work  in  
                              the  Netherlands.  You  do  not  require  a  residence  permit;  a  valid  passport  (or  ID  card)  from  
                              the  country  where  you  are  a  national  is  proof  that  you  legally  entitled  to  stay  and  work  in  
                              the  Netherlands.  Please  note:  You  must  have  the  financial  means  to  support  yourself  for  as  long  
                              as  you  have  not  yetfound  work.  </p>
                              <ul>
                                <li>Austria  </li>
                                <li>Belgium  </li>
                                <li>Bulgaria  </li>
                                <li>Croatia  </li>
                                <li>Cyprus  </li>
                                <li>Czech  Republic  </li>
                                <li>Denmark  </li>
                                <li>Germany  </li>
                                <li>Estonia  </li>
                                <li>Finland  </li>
                                <li>France  </li>
                                <li>Greece  </li>
                                <li>Hungary  </li>
                                <li>Iceland  </li>
                                <li>Ireland  </li>
                                <li>Italy  </li>
                                <li>Latvia  </li>
                                <li>Liechtenstein  </li>
                                <li>Lithuania  </li>
                                <li>Luxemburg  </li>
                                <li>Malta  </li>
                                <li>Norway  </li>
                                <li>Poland  </li>
                                <li>Portugal  </li>
                                <li>Romania  </li>
                                <li>Slovakia  </li>
                                <li>Slovenia  </li>
                                <li>Spain  </li>
                                <li>Sweden  </li>
                                <li>Switzerland  </li>
                                <li>United  Kingdom   </li>
                              </ul>
                          </Fragment>}
                        />
                        <QAItem
                          height={500}
                          q="What  kind  of  Visa  do  I  need  in  the  Netherlands?"
                          a={<Fragment>
                            <p>If  you  are  NOT  a  national  of  a  country  that  is  part  of  the  European  Union  (EU),  the  European  
                              Economic  Area  or  Switzerland,  you  need  to  apply  for  a  Knowledge  Migrant  (KM)  visa  with  
                              the  Dutch  Immigration  Office  (IND). </p>
                            <p>You  need  at  least  a  bachelor  degree,  minimum  salary  requirement  (&lt; 30  years  EUR  3.229,-  and  &gt;  
                              30  years  EUR  4.404,-  (excluding  holiday  allowance)in  2018)  and  an  employment  contract  with  a  Dutch  company. </p>
                            <p>The  KM  visa  application  takes  6  weeks,  from  the  moment  the  Immigration  Office  received  the  completed  
                              application  and  additional  documents.  However,  within  two  weeks  you  will  receive  conformation  a  KM  visa  
                              will  be  provided  to  you. </p>
                            <p>To  be  able  to  hire  a  knowledge  Migrant  the  employer  needs  to  be  a  recognized  sponsor  with  the  Dutch  
                              Immigration  Office  (IND),  or  in  Dutch  ͞Erkent  Referent͟.  Without  it  employers  are  not  allowed  to  hire  a  Knowledge  Migrant.  
                              They  can  apply  for  the  Sponsorship  (Erkent  Referent)  with  the  IND.  </p>
                            <p>Globiez  can  support  candidates  and  companies  with  the  whole  process  and  take  it  of  your  hands.   </p>
                          </Fragment>}
                        />
                        <QAItem
                          height={315}
                          q="What  to  take  care  of  after  you  arrive"
                          a={<Fragment>
                            <p>Congratulations,  you  landed  a  new  job!  Now  it’s  time  to  arrange  everything  to  be  able  to  set  up  a  life  
                              in  the  Netherlands.  You  should  take  care  of  the  following: </p>
                            <ul>
                              <li>Pick  up  your  Knowledge  Migrant  visa  at  the  Immigration  office  or  the  Expat  Center  (If  applicable)  </li>
                              <li>Register  at  Town  Hall  for  your  Fiscal  number  (BSN)or  at  the  Expat  Center  </li>
                              <li>Find  a  place;  a  room,  apartment,  house  etc. </li>
                              <li>Open  a  bank  account  oApply  for  a  health  insurance  policy  </li>
                              <li>Apply  for  the  30%  tax  ruling </li>
                            </ul>
                          </Fragment>}
                        />
                        <QAItem
                          height={555}
                          q="What  is  the  30%  tax  ruling?"
                          a={<Fragment>
                            <p>The  30%  Tax  ruling  is  a  tax  ruling  for  highly  skilled  people  who  come  to  work  in  the  Netherlands.  
                              It  means  that  the  first  30%  of  the  gross  salary  is  not  taxed.  With  this  special  tax  ruling  the  Dutch  
                              Government  hopes  to  attract  highly  skilled  professionals.  </p>
                            <p>There  are  three  basic  requirements:  </p>
                            <ul>
                                <li>Before  the  1st  working  day  you  should  have  lived  at  least  16  out  of  24  months  abroad,
                                and;</li>
                                <li>You  lived  at  least  150  km  from  the  Dutch  boarder  during  this  period,  and:</li>
                                <li>Minimum  required  taxable  salary  (70%):  €  37,296  (which  is  gross  €  53,280).  
                              For  employees  under  the  age  of  30  who  have  obtained  a  master  degree  at  a  foreign  university  the  
                              minimum  required  taxable  salary  (70%)  is  €  28,350  (which  is  gross  €40,500).  All  amaounts  are  
                                exclusive  of  8%  holiday  allowance.  </li>
                            </ul>
                            <p>From  application  to  confirmation  from  the  Tax  office  the  procedure  will  take  approximately  7  weeks. 
                               If  the  application  was  filed  within  4  months  after  the  start  of  the  employment  agreement,  the  
                               30%  tax  ruling  can  be  applied  backwards  to  the  start  date  of  that  
                              employment  agreement. 
                            </p>
                          </Fragment>}
                        />
                        <QAItem
                          q="How  does  Health  insurance  work  in  the  Netherlands? "
                          a={<p>Every  person  legally  living  in  the  Netherlands  needs  to  take  out  a  private  Basic  health                            
                            insurance  with  an  insurance  company.  On  top  of  that  you  can  choose  for  add-ons  like                            
                            extra  dentist  coverage,  etc.  The  pricing  of  a  basic  package  is  along  EUR  95,-  per  month.                            
                            This  is  normally  paid  privately,  not  by  an  employer.  </p>}
                />
                <QAItem
                  height={150}
                  q="What  is  a  BSN?"
                  a={<p>A  BSN  (or  Burger  Service  Nummer)  is  a  fiscal  registration  number  for  the  Netherlands.  You
                    need  this  number  for  almost  everything,  like  opening  a  bank  account,  for  your
                            employment,  applying  for  governmental  services  etc.  </p>}
                />
                <QAItem
                  height={130}
                  q="How  can  I  open  a  bank  account? "
                  a={<p>       Basically  you  can  walk  into  any  bank  shop  you  want.  Some  banks  prefer  to  make  an                            
                    appointment  with  you.  You  need  a  valid  passport,  a  valid  visa  and  a  BSN.  The  account  can                          
                    be  opened  immediately  and  your  debit  card  will  be  send  to  you  with  5  working  days. </p>}
                />
                <QAItem
                  height={263}
                  q="Housing"
                  a={<p>The  housing  market  in  the  Netherlands  is  quite  stressed  at  the  moment.  That  doesn’t  mean  
                    there’s  nothing  available  or  only  very  expensive  opportunities.  That  is  totally  depending  on  your  
                    requirements.  A  fully  furnished  two  bedroom  apartment  in  the  centre  of  Amsterdam  is  of  course  
                    more  expensive  than  an  empty  studio  in  one  of  the  surrounding  areas.<br />
                    There  are  several  groups  on  Facebook  were  apartments  and  rooms  are  offered  at  a  fair  price. 
                     Using  a  real  estate  agent  will  drive  you  to  the  more  expensive  properties,  but  they  can  definitely 
                      be  a  solution  to  find  a  place  that  meets  your  demands.  
                    </p>}
                />
                      </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default QAPage;

export const vacancies = graphql`
  query($path: String!) {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            fullpath
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
    markdownRemark(fields: { fullpath: { eq: $path } }) {
      fields {
        fullpath
      }
      frontmatter {
        title
      }
      html
    }
  }
`;