import React, { Component } from 'react'
import "froala-editor/js/froala_editor.pkgd.min.js"
import "froala-editor/css/froala_editor.pkgd.min.css"
import 'font-awesome/css/font-awesome.css'
import FroalaEditor from 'react-froala-wysiwyg'

class NewsPageContent extends Component {
    render() {
        return (
            <div className="right_col" role="main">
                <div className="">
                    <div className="page-title">
                        <div className="title_left">
                            <h3>News :: Add news</h3>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h3>Add News</h3>
                                    <div className="clearfix"></div>
                                </div>
                                <form className="form-horizontal form-label-left">
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">News Cover Image <span className="required">*</span></label>
                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                            <input type="file" accept=".jpg, .png, .jpeg, .tiff|images/*" className="form-control" id="main_image" required="required"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">News Title <span className="required">*</span></label>
                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                            <input type="text" className="form-control" id="news_title" placeholder="Title" required="required"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Category News</label>
                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                            <select className="form-control" id="news_category">
                                                    <option>Alumni news</option>
                                                    <option>KMUTT news</option>
                                                    <option>Faculty news</option>
                                                </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-md-3 col-sm-3 col-xs-12">Select Faculty</label>
                                        <div className="col-md-9 col-sm-9 col-xs-12">
                                            <select className="form-control" id="news_role">
                                                    <option>ทั้งหมด</option>
                                                    <option>คณะวิศวกรรมศาสตร์</option>
                                                    <option>คณะพลังงานและวัสดุ</option>
                                                    <option>คณะวิทยาศาสตร์</option>
                                                    <option>คณะครุศาสตร์อุตสาหกรรม</option>
                                                    <option>คณะทรัพยากรชีวภาพและเทคโนโลยี</option>
                                                    <option>คณะเทคโนโลยีสารสนเทศ</option>
                                                    <option>คณะสถาปัตยกรรมศาสตร์</option>
                                                    <option>คณะศิลปศาสตร์</option>
                                                    <option>บัณฑิตร่วมด้านพลังงานและสิ่งแวดล้อม</option>
                                                    <option>บัณฑิตวิทยาลัยการจัดการและนวัตกรรม</option>
                                                    <option>คณะสถาบันวิทยาการหุ่นยนต์ภาคสนาม (วทม.)</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="x_title">
                                        <label>News Detail</label>
                                        <div className="clearfix"></div>
                                    </div>
                                        <FroalaEditor tag='textarea'/>
                                        <br></br>
                                    <div className="form-group">
                                        <div className="col-md-9 col-sm-9 col-xs-12 col-md-offset-3">
                                            <a href="allnews.html" className="btn btn-danger">Cancel</a>
                                            <a href="addnews.html" className="btn btn-primary">Reset</a>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NewsPageContent