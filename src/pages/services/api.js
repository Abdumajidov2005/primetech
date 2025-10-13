import { toast } from "react-toastify";
import { baseUrl } from "./config";
import { getToken } from "./token";

export const getProductData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/products/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getCategoyData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/category/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getProductDetail = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/product/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getFilterCategoryData = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/products/?category=${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getAnnouncement = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/announcements/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getAnnouncementId = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/announcement/${id}/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export const getSearchData = (searchProductName) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    `${baseUrl}/products/?search=${searchProductName}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getAboutData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/about/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getUserData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/auth/user-crud/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getCartId = (id, setCartsData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const raw = JSON.stringify({
    product: id,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/cart-add/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      toast.success("Maxsulot qo'shildi");
      getCartsData()?.then((data) => {
        setCartsData(data);
      });
      return result;
    })
    .catch((error) => console.error(error));
};

export const getCartsData = async () => {
  const token = getToken();
  if (!token) return []; // foydalanuvchi login qilmagan

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseUrl}/carts/`, requestOptions);

    if (response.status === 401) return [];

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("getCartsData error:", err);
    return [];
  }
};

export const deleteData = (id, setCartsData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/cart/${id}/delete/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toast.success("Maxsulot o'chirildi");
      getCartsData()?.then((data) => {
        setCartsData(data);
      });
      return result;
    })
    .catch((error) => console.error(error));
};
