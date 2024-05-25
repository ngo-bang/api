import unittest
import requests

URL = "http://localhost:9999"
class AppTestCase(unittest.TestCase):
    def test_list(self):
        response = requests.get(f"{URL}/api/list")
        self.assertEqual(response.status_code, 200)
    def test_get(self):
        response = requests.get(f"{URL}/api/get/1")
        self.assertEqual(response.status_code, 200)

    def test_create(self):
        data = {
            "_id": "500",
            "Họ và tên": "Nguyen van x",
            "Năm": "2002",
            "Giới tính": "Nam",
            "Trường": "Dai hoc a",
            "Quốc gia": "VN"
        }
        response = requests.post(f"{URL}/api/create", json=data)
        self.assertEqual(response.status_code, 200)

        response = requests.get(f"{URL}/api/get/500")
        self.assertEqual(response.status_code, 200)
        requests.delete(f"{URL}/api/delete/500")
    def test_delete(self):
        data = {
            "_id": "502",
            "Họ và tên": "Nguyen van x",
            "Năm": "2002",
            "Giới tính": "Nam",
            "Trường": "Dai hoc a",
            "Quốc gia": "VN"
        }
        requests.post(f"{URL}/api/create", json=data)

        response = requests.delete(f"{URL}/api/delete/502")
        self.assertEqual(response.status_code, 200)


    def test_update(self):
        data = {
            "_id": "501",
            "Họ và tên": "Nguyen van x",
            "Năm": "2002",
            "Giới tính": "Nam",
            "Trường": "Dai hoc a",
            "Quốc gia": "VN"
        }
        requests.post(f"{URL}/api/create", json=data)

        updated_data = {
            "_id":"501",
            "Họ và tên": "Nguyen thi x",
            "Năm": "2005",
            "Giới tính": "Nu",
            "Trường": "Dai hoc b",
            "Quốc gia": "Lao"
        }
        response = requests.put(f"{URL}/api/update", json=updated_data)
        self.assertEqual(response.status_code, 200)

        response = requests.get(f"{URL}/api/get/501")
        self.assertEqual(response.status_code, 200)
        student = response.json()
        self.assertEqual(student["Họ và tên"], "Nguyen thi x")
        self.assertEqual(student["Năm"], "2005")
        self.assertEqual(student["Giới tính"], "Nu")
        self.assertEqual(student["Trường"], "Dai hoc b")
        self.assertEqual(student["Quốc gia"], "Lao")
        requests.delete(f"{URL}/api/delete/500")

if __name__ == '__main__':
    unittest.main()