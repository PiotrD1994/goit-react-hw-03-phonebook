import React from "react";
import PropTypes from 'prop-types'
import css from './Filter.module.css'

function Filter ({value, onChange}) {
    return (
        <div className={css.container}>
        <h3 className={css.header}> Search Name</h3>
            <label className={css.label}>
 <input className={css.input} type="text" value={value} onChange={onChange} />
            </label>
            </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter