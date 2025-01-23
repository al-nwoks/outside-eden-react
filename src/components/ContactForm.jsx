import React, { useRef, useState } from 'react'
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const ContactForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
       
        phone: '',
        gender: '',
        currentPosition: '',
        currentCompany: '',
        city: '',
        state: '',
        postalCode: '',
        contentLink: '',
        socialMediaPlatforms : '',
        message: '',


    })
    //
    const [checkboxError, setCheckboxError] = useState("");

    const [birthDate, setBirthDate] = useState(null);
    
    const [tableData, setTableData] = useState([
        { row: "Instagram", instagramUrl: "", instagramFans: "",igRemarks: ""},
        { row: "Twitter(X)", twitterUrl: "", twitterFans: "", twitterRemarks: "" },
        { row: "Tiktok ID", tiktokUrl: "", tikTokFans: "", tiktokRemarks: ""},
        { row: "Facebook Page", facebookUrl: "", facebookFans: "", facebookRemarks: ""},
        { row: "Youtube", youtubeUrl: "", youtubeFans: "", youtubeRemarks: ""}
      ]);

      const columnHeadings = ["", "URL/link", "No. of fans/followers", "Remarks"];
    
      const [selectedOptions, setSelectedOptions] = useState([]);

      const checkboxOptions = ["Photography", "Creative Writing", "Video", "Other"];
      const checkboxOptions2 = ["Art", "Technology", "Beauty and fashion", "Gadgets", "Events", "Gaming", "Other"];   

      const handleCheckboxChange = (option) => {
        setSelectedOptions((prev) =>
          prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
        setCheckboxError(""); // Clear error message when user selects a checkbox
      };
    
      // Function to update table data when edited

      const handleTableChange = (rowIndex, field, value) => {
        const updatedTableData = tableData.map((row, index) =>
          index === rowIndex ? { ...row, [field]: value } : row
        );
        setTableData(updatedTableData);
      };
    
    const handleChange = (e) => {
        const {target} = e;
        const{name, value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!date || !gender) {
            alert("Please complete the form!");
            return;
        }
      
        setForm({
            name: '',
            email: '',
            message: '',
            gender: '',
            phone: '',
            birthDate: '',

        })
    }
  return (
   <section className='c-space my-20'>
    <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/img/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
        <div className="contact-container">
        <h3 className="head-text mt-5 lg:mt-8">Content Creator Information Form</h3>
        <p className="text-lg text-white-600 mt-3">
            Whether you're looking to start a business or improve your existing business, we're here to help.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7 '>
            <label className='space-y-3'>
                <span className="field-label">
                    Full Name
                </span>
                <input type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input" 
                placeholder='Michael Smith' />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                    Email
                </span>
                <input type="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input" 
                placeholder='Johndoe@gmail.com' />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                    Phone Number
                </span>
                <input type="tel" 
                name="phone" 
                value={form.phone}
                onChange={handleChange}
                required
                className="field-input" 
                placeholder='123-456-7890' />
                <p className='text-sm text-white-600'>please enter a valid phone number</p>
            
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                    Address
                </span>
                <input type="text" 
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="field-input" 
                placeholder='Street Address' />
            </label>
            <label className='space-y-3'>
                
                <input type="text" 
                name="address2"
                value={form.address2}
                onChange={handleChange}
                required
                className="field-input" 
                placeholder='Street Address Line 2' />
            </label>
            <div className='flex space-x-3'>
            <label className='space-y-3'>
                <span className="field-label">
                    City
                </span>
                <input type="text" 
                name="city"    
                value={form.city}
                onChange={handleChange}
                required
                className="field-input" 
                />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                    State / Province
                </span>
                <input type="text" 
                name="state"    
                value={form.state}
                onChange={handleChange}
                required
                className="field-input" 
                />
            </label>
            </div>
           
            <label className='space-y-3'>
                <span className="field-label">
                    Postal / Zip Code
                </span>
                <input type="text" 
                name="postalCode"    
                value={form.postalCode}
                onChange={handleChange}
                required
                className="field-input" 
                />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                    Date of Birth
                </span>
                <DatePicker onChange={setBirthDate} value={birthDate} format="dd/MM/yyyy"  className="field-input"
  calendarClassName="bg-black-200 border border-gray-300 shadow-lg rounded-md"
/>

            </label>
            <label className="space-y-3">
                <span className='field-label'>
                Select Gender: 
                </span>
                
      <select
        name='gender'
        value={form.gender}
        onChange={handleChange}
        className="field-input"
      >
        <option value="" disabled>Select your gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      </label>

      <label className='space-y-3'>
                <span className="field-label">
                    Current Position/Title
                </span>
                <input type="text" 
                name="currentPosition"    
                value={form.currentPosition}
                onChange={handleChange}
                required
                className="field-input" 
                />
            </label>

            <label className='space-y-3'>
                <span className="field-label">
                    Current Company/School Name
                </span>
                <input type="text" 
                name="currentCompany"    
                value={form.currentCompany}
                onChange={handleChange}
                required
                className="field-input" 
                />
            </label>
            <div className="mt-6">
        <h2 className="field-label">Social Media Profiles</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-black">
              {columnHeadings.map((heading, index) => (
                <th key={index} className="border border-gray-300 p-2">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-center">
                {Object.keys(row).map((field, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 p-2">
                    {field === "row" ? ( // If it's the row heading, show it as non-editable text
                      <strong>{row[field]}</strong>
                    ) : (
                      <input
                        type="text"
                        value={row[field]}
                        onChange={(e) => handleTableChange(rowIndex, field, e.target.value)}
                        className="field-input"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <h3 className="field-label">What kind of content are you creating?</h3>
        {checkboxOptions.map((option, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
         {checkboxError && <p className="text-red-500 mt-1">{checkboxError}</p>}
      </div>

      <div className="mt-4">
        <h3 className="field-label">Category</h3>
        {checkboxOptions2.map((option, index) => (
          <label key={index} className="block">
            <input
              type="checkbox"
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

            <label className='space-y-3'>
                <span className="field-label">
                   How do you monetize your social media accounts?
                </span>
                <textarea type="text" 
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input" 
                placeholder="Hi, I wanna give you a job..." />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                   Which of the social media platforms are you always using?
                </span>
                <textarea type="text" 
                name="socialMediaPlatforms"
                value={form.socialMediaPlatforms}
                onChange={handleChange}
                required
                rows={5}
                className="field-input" 
                placeholder="Instagram,..." />
            </label>
            <label className='space-y-3'>
                <span className="field-label">
                   Provide the links of the content youre most proud of and provide the reason why.
                </span>
                <textarea type="text" 
                name="contentLink"
                value={form.contentLink}
                onChange={handleChange}
                required
                rows={5}
                className="field-input" 
                placeholder="Provide a link" />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <img src='img/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
            </button>
        </form>
        </div>
    </div>
   
    
    

   </section>
  )

}

export default ContactForm;

