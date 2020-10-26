import React, { Component } from 'react';
import { FaBook } from 'react-icons/fa';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <FaBook />
              </div>
            </div>
            <input
              type='text'
              name='item'
              className='form-control text-capitalize'
              placeholder='Add todo item'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            disabled={item ? false : true}
            className={
              editItem
                ? 'btn btn-block btn-success mt-3 text-uppercase'
                : 'btn btn-block btn-primary mt-3 text-uppercase'
            }>
            {editItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}
