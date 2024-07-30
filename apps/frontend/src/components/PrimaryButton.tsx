export default function PrimaryButton({children, onClick}: {children: string, onClick: () => void}) {
    return <button className="border p-3 px-7 rounded-full hover:bg-slate-200"  onClick={onClick}>
        {children}
    </button>
}