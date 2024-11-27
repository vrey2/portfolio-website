import Link from 'next/link';

export default function Header(){
    return (
        <div className="m-6 p-6 bg-transparent">
        <ul className="flex justify-end gap-6">
            <li>
                <Link href='./Projects'>Projects</Link>
            </li>
            <li>
                <Link href='./About'>About</Link>
            </li>
            <li>
                <Link href='./Contact'>Contact</Link>
            </li>
        </ul>
      </div>    
    )
}