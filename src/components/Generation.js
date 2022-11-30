import GenSideBar from './generation/GenSideBar'

const Generation = (props) => {
    return (
        <>
            <GenSideBar generation={props.generation} />
        </>
    )
}

export default Generation