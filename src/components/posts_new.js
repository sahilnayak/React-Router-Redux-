import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {

    render() {
        const {fields: {title, category, content}, handleSubmit} = this.props;
        
        return (  
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a Blog Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type='text' className='form-control' {...title}  />
                    <div className='text-help'>
                    {title.touched ? title.error : ''}
                    </div>
                </div>
                  <div className={`form-group ${category.touched && category.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type='text' className='form-control' {...category} />
                    <div className='text-help'>
                    {category.touched ? category.error : ''}
                    </div>
                </div>
                  <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <input type='text' className='form-control' {...content}/>
                    <div className='text-help'>
                    {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }
    if(!values.category) {
        errors.category = 'Enter a category';
    }
    if(!values.content) {
        errors.content = 'Enter some content';
    }
    return errors;
}

export default reduxForm({
    form:'PostsNewForm',
    fields: ['title', 'category', 'content'],
    validate
}, null, {createPost: createPost})(PostsNew);