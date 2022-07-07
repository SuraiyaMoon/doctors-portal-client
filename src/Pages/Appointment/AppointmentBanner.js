import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import background from '../../assets/images/bg.png';
import banner from '../../assets/images/chair.png';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse px-12">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;