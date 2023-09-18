import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

export default function SignupPage() {
  return (
    <div className="bg-[#2E78A6] h-[100vh]">
      <div className="flex content-center justify-center">
        <div className="relative z-20 right-[200px] mt-[100px]">
          <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50.5" cy="50.5" r="50.5" fill="#A3BFD9" />
            <path
              d="M78.3417 71.961C74.7534 65.6632 69.1503 60.7562 62.4344 58.0297C65.7741 55.5249 68.2411 52.0327 69.4859 48.0479C70.7306 44.0631 70.6901 39.7877 69.3699 35.8272C68.0498 31.8668 65.517 28.4221 62.1303 25.9811C58.7436 23.5401 54.6747 22.2266 50.5 22.2266C46.3253 22.2266 42.2565 23.5401 38.8698 25.9811C35.4831 28.4221 32.9503 31.8668 31.6301 35.8272C30.31 39.7877 30.2694 44.0631 31.5141 48.0479C32.7589 52.0327 35.2259 55.5249 38.5656 58.0297C31.8497 60.7562 26.2467 65.6632 22.6584 71.961C22.436 72.3185 22.2878 72.7171 22.2226 73.133C22.1574 73.5489 22.1765 73.9737 22.2787 74.3821C22.3809 74.7906 22.5642 75.1743 22.8177 75.5104C23.0712 75.8466 23.3896 76.1283 23.7542 76.339C24.1187 76.5496 24.5219 76.6847 24.9397 76.7364C25.3576 76.7881 25.7815 76.7553 26.1864 76.6399C26.5913 76.5244 26.9688 76.3288 27.2966 76.0645C27.6243 75.8003 27.8956 75.4728 28.0943 75.1016C32.8366 66.9046 41.2116 62.0157 50.5 62.0157C59.7884 62.0157 68.1634 66.9072 72.9058 75.1016C73.3363 75.7939 74.0192 76.2917 74.8101 76.4896C75.601 76.6876 76.4379 76.5702 77.1438 76.1624C77.8498 75.7545 78.3694 75.0881 78.593 74.3041C78.8165 73.52 78.7264 72.6798 78.3417 71.961ZM36.8906 42.125C36.8906 39.4334 37.6888 36.8021 39.1842 34.5641C40.6797 32.326 42.8051 30.5817 45.2919 29.5516C47.7787 28.5216 50.5151 28.252 53.1551 28.7772C55.795 29.3023 58.22 30.5985 60.1233 32.5018C62.0266 34.4051 63.3228 36.83 63.8479 39.47C64.373 42.1099 64.1035 44.8463 63.0734 47.3331C62.0434 49.8199 60.299 51.9454 58.061 53.4408C55.8229 54.9362 53.1917 55.7344 50.5 55.7344C46.8919 55.7303 43.4327 54.2951 40.8813 51.7437C38.33 49.1924 36.8948 45.7332 36.8906 42.125Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="flex content-center justify-center">
        <div className="h-[600px] w-[850px] bg-white px-[90px] py-[45px] rounded-[30px] relative z-10 bottom-[50px]">
          <form>
            <div className="grid grid-cols-2 gap-5 mt-20">
              <TextInput label="Nama Lengkap" name="name" type="text" />
              <TextInput label="Nama Peternakan" name="farmName" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextInput
                label="Alamat Peternakan"
                name="farmAddress"
                type="address"
              />
              <TextInput label="Password" name="password" type="password" />
              <TextInput label="Nomor Telepon" name="phone" type="phone" />
              <TextInput
                label="Konfirmasi Password"
                name="confirmPassword"
                type="password"
              />
            </div>
            <Button
              className="absolute up-[200px] right-[100px] p-3 rounded-xl text-md font-bold w-[150px] bg-[#AFC97E]"
              type="button"
            >
              Daftar
            </Button>
          </form>
        </div>
        <div className="h-[600px] w-[400px] bg-[#A3BFD9] flex items-center justify-center rounded-[30px] relative right-[60px] pl-[60px] bottom-[50px]">
          <img
            style={{ width: 200, height: 267 }}
            src="/src/assets/kalkulembu-logo.png"
            alt="Kalkulembu Logo"
          />
        </div>
      </div>
    </div>
  );
}
