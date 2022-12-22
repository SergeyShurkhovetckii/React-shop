import { Footer } from 'flowbite-react/lib/cjs/components/Footer';
function FooterPage () {
    return (
    <Footer className = " footer">
    <div className="w-full px-4 py-6 bg-gray-200">
      <Footer.Copyright
        by="Sergey Shurkhovetskii"
        year={2022}
      />
      </div>
    </Footer>
    )
}
export {FooterPage };