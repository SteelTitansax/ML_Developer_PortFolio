import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import {supervisedSkills, supervisedExperiences, reactProjects, supervisedProjects, canvasProjects, nodeProjects, nocodeProjects} from '../profile'
import Link from 'next/link'


const UnSupervised = () =>
<Layout>

    {/** Header card */}
    <header className="row">

        <div className="col-md-12">
            <div className="card card-body bg-primary text-light">
            <div className="row">
                <div className="col-md-2">
                    <img src="supervised.png" className="mt-1" height="95px" alt="React perfil"/>
                </div>
                <div className="col-md-10">
                    <h1 >Supervised Learning </h1>
                    <h3>Machine Learning discipline</h3> 
                    <h6 style={{paddingTop:'8px'}}>Unsupervised learning in artificial intelligence is a type of machine learning that learns from data without human supervision. Unlike supervised learning, unsupervised machine learning models are given unlabeled data and allowed to discover patterns and insights without any explicit guidance or instruction.</h6>
                   
                </div>
            </div>
        </div>


    </div>

    </header>
     

     {/**Second Section */}
      
     <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body card-body-skills">
                          <h3 className="text-dark">Skills</h3>
                            {
                                supervisedSkills.map(({skill,percentage},i) => (
                                    <div className="py-3" key={i}>
                                        <h6 className="text-primary">{skill}</h6>
                                        <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             role="progressbar"
                                             style={{width:`${percentage}%`}}></div>
                                        </div>
                                    </div>
                                ))
                            }


                          
                    </div>
                </div>
        </div>

        <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body card-body-experience">
                          <h3 className="text-dark">Experience</h3>
                           
                          <ul>
                          {
                              supervisedExperiences.map (({title,description,from,to,url},i) => ( 
                               <div key={i}>
                                 <li>
                                    <h4 className="text-dark">{title}</h4>
                                    <h6 className="text-secondary">{from}-{to}</h6>
                                    <p className="text-primary">{description}</p>
                                 </li>   
                                    <a className="btn btn-primary border know-more" href={url}>
                                        Know more 
                                    </a> 
                                
                               </div>
                               


                              ))
                           
                          }
                              
                          </ul>
                    </div>
                </div>
        </div>
     </div>
    
    
    

    {/** Portfolio */}
    <div className="row mt-5">

          <div className="col-md-12">
                <div className="card card-body bg-primary">
                    <div className="row">
                        <div className="col-md-12 border-bottom">
                            <h1 className="text-center text-light"> Portfolio</h1>
                        </div>
                            

                        <div className="col-md-12 mt-3">
                            <h3 className="text-center text-white"> Supervised Learning</h3>
                            <div className="border-bottom"/>
                        </div>        

                        {
                              supervisedProjects.map(({name,description,image,url},i) => (
                                
                                    <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow ">
                                            <img src={`/${image}`} alt="Imagen Portfolio1" className="card-img-top border-bottom" />
                                        </div>
                                        <div className="card-body ">
                                            <h5 className="text-center text-white"><strong>{name}</strong></h5>
                                            <p className="text-center  text-white">{description}</p>
                                            <div className="text-center">
                                            <a className="btn btn-info border button-card" href ={url}>Demo</a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>

                              ))
                          }                   

                        

                    </div>

                   


               

                   


                </div>

               


          </div>     
           
    </div>
</Layout>


export default UnSupervised;
