import SidelinePanel from "../components/SidelinePanel/SidelinePanel"

export default function EmptyPage() {
    return (
        <div className='flex gap-4 w-full h-full'>
            <SidelinePanel />
            <div className="w-full content-center text-center">
                <p>Nothing to see here!</p>
                <p>Click on the + Button to open a new page.</p>
            </div>
        </div>
    )
}