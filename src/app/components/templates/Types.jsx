export default function Types({ functionProp, style, props }) {

    return (
        <div className="ApareanceOptions_Type">
            <div className={`ExecutionOptions_${props.type ? 'COLUMN' : 'ROW'}`}>
                <div className={`text_${props.type ? 'COLUMN' : 'ROW'}`}>
                    <h4>{props.text}</h4>
                    <h6 className="DefinitionOptions">{props.definition}</h6>
                </div>
                <div className={`Switchs_${props.type ? 'COLUMN' : 'ROW'} ${!props.selects ? 'non-values' : ''}`}>
                    {
                        props.selects && <h4>{props.selects.f}</h4>
                    }
                    <button className={!props.selects && 'button-non-values'} style={style()} onClick={functionProp}>
                        <div />
                    </button>
                    {
                        props.selects && <h4>{props.selects.l}</h4>
                    }
                </div>
            </div>
        </div>
    )
}