/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import React from 'react'
import './index.less';
import { connect } from 'react-redux'

class ProjectModal extends React.Component{
    constructor(props){
       super(props)
       this.state ={
          
           
       }
    }

    getDegree(degree){
        return {
            "高":"org2",
            "中":"org1",
            "低":"org0"
        }[degree]||'org0'
    }

    getDegreeBy(degree){
        if(this.props.chiFlag === "chi"){
            return degree
        }
        return {
            "高":"High",
            "中":"Medium",
            "低":"Low"
        }[degree]||"Low"
    }

  

 


    render(){
        let showdata = this.props.showdata
        let item = this.props.item
        return(         
            <div className={["projectListItem",this.getDegree(item.difficulty)].join(" ")} >
                <div className="projectListItemLeft">
                    <div className="orgProjectTitleBar">
                        
                        <div className="orgProjectTitle">{item.name}</div>
                        <div className="orgProjectLine">
                            <div className="orgProjectId">{showdata.projectID} {item.label}</div>
                            {
                                item.wiki?
                                <div className="orgProjectWiki">
                                    <a href={item.wiki} target="_blank" rel="noopener noreferrer">{showdata.proStore}</a>
                                </div> :""
                            }                                          
                        </div>
                                                
                        <div className="orgProjectBottomLeft">
                            <div>{showdata.proDi}{this.getDegreeBy(item.difficulty)}</div>
                            {/* 功能暂未上线 */}
                            {/* <div>{showdata.proSelectStu}{item.student_name}</div> */}
                            {/* <div className="orgProjectName">{item.orgtitle}</div> */}
                        </div>
                    </div>

                </div>
                <div className="projectListItemRight">
                    <div className="orgProjectDes">{item.description}</div>
                    <div>
                        <ul className="projectListItemRightUl">
                            <li>{showdata.proMentor}{item.mentor}</li>
                            <li>{showdata.proMentorContact}<a href={"mailto:"+item.contact}>{item.contact}</a></li>
                        </ul>
                        <div className=" orgProjectButton">{showdata.proDetail}</div></div>
                </div>

            </div>
         )
       
        
        
    }
}

const mapStateToProps = (state)=>{

    return {
       chiFlag:state.chiFlag
   }
 }
 
 export default connect(mapStateToProps)(ProjectModal)