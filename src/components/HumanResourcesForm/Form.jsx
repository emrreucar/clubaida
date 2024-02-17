import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  return (
    <div className="p-10 lg:p-20 lg:flex-[3] ">
      <h1 className="text-3xl font-bold mb-2"> {t("job application form")} </h1>
      <p className="mb-4">
        {t("Would You Like to Join Hotel V6 Website Family?")}
      </p>
      <p className="text-gray-400">{t("human_resources_form_content")}</p>

      <form>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              for="name"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              {t("Name / Surname")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="custom__input"
              placeholder="Emre Uçar"
            />
          </div>

          <div>
            <label
              for="email"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="custom__input"
              placeholder="yourmail@provider.com"
            />
          </div>

          <div>
            <label
              for="phone_number"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              {t("Phone")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              className="custom__input"
              placeholder="+94747423423"
            />
          </div>

          <div>
            <label
              for="tc"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              {t("tc")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="tc"
              id="tc"
              className="custom__input"
              placeholder="18999999999"
            />
          </div>

          <div>
            <label
              for="cv"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              CV
            </label>
            <input
              type="file"
              name="cv"
              id="cv"
              className="custom__input"
              placeholder="CV'nizi Ekleyin"
            />
          </div>

          <div>
            <label
              for="message"
              className="text-sm text-gray-700 block mb-1 font-medium"
            >
              {t("message")}
            </label>
            <textarea
              name="message"
              id="message"
              className="custom__input"
              placeholder={`${t("thanks")}`}
            />
          </div>
        </div>

        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-800 active:bg-indigo-800 disabled:opacity-50 duration-300 "
          >
            {t("apply for")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
