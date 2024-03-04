import React from 'react'

const GenderCheckBox = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Male &nbsp; </span>
                    <input type="checkbox" className="checkbox border-blue-400 [--chkbg:theme(colors.blue.400)]" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text"> &nbsp; Female &nbsp; </span>
                    <input type="checkbox" className="checkbox border-blue-400 [--chkbg:theme(colors.blue.400)]" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox