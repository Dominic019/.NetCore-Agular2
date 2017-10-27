(function () {
    "use strict";

        angular
            .module("contacto")
            .factory("contactosService", ["$http", "$q", "url",

    function contactosService($http, $q, url) {

        function consultarContactosCuentas(paginacion) {
            return $http({
                url: url + "/MilenioPC/api/Contacto/ConsultarContactosCuentas",
                method: "GET",
                params: paginacion
            });
        };

        function consultarContactosPorCuentaYSucursal(cuenta, sucursal) {
            return $http.get(url +
                    "MilenioPC/api/Contacto/ConsultarContactosPorCuentaYSucursal?cuenta=" +
                    cuenta +
                    "&sucursal=" +
                    sucursal)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return error;
                });
        };

        function consultarContactoCuentaPorGuid(id) {
            return $http.get(url + "MilenioPC/api/Contacto/ConsultarContactoCuentaPorGuid?id=" + id)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return error;
                });
        };

        function consultarContactosPorCuenta(id) {
            return $http.get(url + "MilenioPC/api/Contacto/consultarContactosPorCuenta?id=" + id)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return error;
                });
        };

        function crearContactoCuenta(contacto) {
            debugger
            return $http.post(url + "MilenioPC/api/Contacto/CrearContactoCuenta", contacto)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return $q.reject(error);
                });
        };

        function actualizarContactoCuenta(contacto) {
            return $http.put(url + "MilenioPC/api/Contacto/ActualizarContactoCuenta", contacto)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return $q.reject(error);
                });
        };

        function inactivarContactoCuenta(contacto) {
            return $http.delete(url + "MilenioPC/api/Contacto/InactivarContactoCuenta?id=" + contacto.Guid)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return $q.reject(error);
                });
        };

        function activarContactoCuenta(contacto) {
            return $http.delete(url + "MilenioPC/api/Contacto/ActivarContactoCuenta?id=" + contacto.Guid)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    return $q.reject(error);
                });
        };

        function consultarContactoCuentaPorFiltro(contacto) {
            return $http({
                url: url + "/MilenioPC/api/Contacto/ConsultarContactoCuentaPorFiltro",
                method: "GET",
                params: contacto
            });
        };

        return {
            consultarContactosCuentas: consultarContactosCuentas,
            consultarContactoCuentaPorGuid: consultarContactoCuentaPorGuid,
            crearContactoCuenta: crearContactoCuenta,
            actualizarContactoCuenta: actualizarContactoCuenta,
            inactivarContactoCuenta: inactivarContactoCuenta,
            activarContactoCuenta: activarContactoCuenta,
            consultarContactoCuentaPorFiltro: consultarContactoCuentaPorFiltro,
            consultarContactosPorCuentaYSucursal: consultarContactosPorCuentaYSucursal,
            consultarContactosPorCuenta: consultarContactosPorCuenta

        }
    }
    ]);
})();
