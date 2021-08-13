import React, {useState} from "react";


export const ProfileStatus = ({setChengeStatus, statusText}: any) => {
    const [status, setStatus] = useState(false)
    const [value, setValue] = useState(statusText)

    const inputHendler = (e: any) => setValue(e.target.value)
    const chengeStatus = (e: any) => {
        if (e.type === 'keypress') {
            if (e.charCode === 13) {
                setStatus(false)
                setChengeStatus(value)
            }
        }
        if (e.type === 'dblclick') {
            setStatus(true)

        }

    }

    return (
        <div>
            {
                status ?
                    <input
                        type="text"
                        value={value}
                        onChange={e => inputHendler(e)}
                        onKeyPress={e => chengeStatus(e)}
                    />
                    :
                    <span onDoubleClick={e => chengeStatus(e)}>{statusText}</span>
            }
        </div>
    )
}