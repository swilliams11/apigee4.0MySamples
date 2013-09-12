//context.setVariable("MyVar", context.getVariable("target.name")); //used for debugging
//context.setVariable ("mytarget.name", context.getVariable("target.name")); //used for debugging
context.proxyResponse.headers['X-Apigee-Demo-Target'] = context.getVariable("target.name");
context.proxyResponse.headers['X-Apigee-Demo-ApiProxyName'] = context.getVariable("apiproxy.name");
context.proxyResponse.headers['X-Apigee-Demo-ProxyName'] = context.getVariable("proxy.name");
context.proxyResponse.headers['X-Apigee-Demo-ProxyBasePath'] = context.getVariable("proxy.basepath");
context.proxyResponse.headers['X-Apigee-Demo-ProxyPathSuffix'] = context.getVariable("proxy.pathsuffix");
context.proxyResponse.headers['X-Apigee-Demo-ProxyUrl'] = context.getVariable("proxy.url");
                                  
//context.proxyResponse.setVariable("header.X-Apigee-Demo-Target", flow.getVariable("target.name"));
//context.proxyResponse.setVariable("header.X-Apigee-Demo-ApiProxyName", flow.getVariable("apiproxy.name"));
//context.proxyResponse.setVariable("header.X-Apigee-Demo-ProxyName", flow.getVariable("proxy.name"));
//context.proxyResponse.setVariable("header.X-Apigee-Demo-ProxyBasePath", flow.getVariable("proxy.basepath"));
//context.proxyResponse.setVariable("header.X-Apigee-Demo-ProxyPathSuffix", flow.getVariable("proxy.pathsuffix"));
//context.proxyResponse.setVariable("header.X-Apigee-Demo-ProxyUrl", flow.getVariable("proxy.url"));