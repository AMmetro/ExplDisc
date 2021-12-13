export interface CmsClient {
  request<T, V>(url: string, params?: V): Promise<T>

  requestMock<T>(url: string): Promise<T>
}
